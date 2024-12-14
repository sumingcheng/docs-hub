import os
import yaml
import logging
from pathlib import Path
from datetime import datetime

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='insert_operation.log'
)

def load_tags_mapping():
    """加载标签映射"""
    try:
        with open('tags.yml', 'r', encoding='utf-8') as f:
            tags = yaml.safe_load(f)
            # 创建目录名到标签的映射
            dir_to_tag = {
                '前端': 'frontend',
                '后端': 'backend',
                '数据库': 'database',
                '操作系统与命令': 'os-and-commands',
                '开发工具与环境': 'dev-tools',
                '网络与协议': 'network-protocol',
                '性能优化和架构': 'performance-architecture',
                'Web3': 'web3',
                'AI': 'ai',
                '2021-08-26-welcome': 'welcome'
            }
            return dir_to_tag
    except Exception as e:
        logging.error(f"加载tags.yml失败: {e}")
        return {}

def get_date_from_filename(filename):
    """从文件名中提取日期"""
    try:
        date_str = filename.split('-')[:3]
        # 添加日期格式验证
        datetime.strptime('-'.join(date_str), '%Y-%m-%d')
        return '-'.join(date_str)
    except (IndexError, ValueError) as e:
        logging.warning(f"无法从文件名提取日期: {filename}, 使用当前日期")
        return datetime.now().strftime('%Y-%m-%d')

def get_title_from_filename(filename):
    """从文件名中提取标题"""
    # 移除日期部分 (YYYY-MM-DD-)
    title = '-'.join(filename.split('-')[3:])
    # 移除文件扩展名
    title = os.path.splitext(title)[0]
    # 将下划线替换为空格
    title = title.replace('_', ' ')
    return title

def get_category_from_path(file_path, dir_to_tag):
    """从文件路径获取分类（目录名）"""
    rel_path = os.path.relpath(file_path, 'blog')
    directory = os.path.dirname(rel_path).split(os.sep)[0]
    
    # 使用映射获取对应的标签
    return dir_to_tag.get(directory, 'misc')

def remove_existing_frontmatter(content):
    """移除已存在的frontmatter"""
    if content.startswith('---'):
        try:
            # 找到第二个 '---' 的位置
            second_delimiter = content.index('---', 3)
            # 返回第二个 '---' 之后的内容
            return content[second_delimiter + 3:].strip()
        except ValueError:
            # 如果找不到第二个 '---'，返回原内容
            return content.strip()
    return content

def insert_frontmatter(file_path, dir_to_tag):
    """在markdown文件开头插入新的frontmatter"""
    try:
        filename = os.path.basename(file_path)
        date = get_date_from_filename(filename)
        title = get_title_from_filename(filename)
        category = get_category_from_path(file_path, dir_to_tag)
        
        frontmatter = f"""---
slug: {title.lower().replace(' ', '-')}
title: {title}
authors: [sumingcheng]
tags: [{category}]
date: {date}
---

"""
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            
        content = remove_existing_frontmatter(content)

        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(frontmatter + content)
            
        logging.info(f"成功处理文件: {file_path}")
        return True
    except Exception as e:
        logging.error(f"处理文件 {file_path} 时出错: {str(e)}")
        return False

def process_markdown_files(directory):
    """遍历目录处理所有.md文件"""
    count = 0
    print(f"开始扫描目录: {directory}")
    
    # 加载标签映射
    dir_to_tag = load_tags_mapping()
    
    for file_path in Path(directory).rglob('*.md'):
        print(f"发现文件: {file_path}")
        if insert_frontmatter(file_path, dir_to_tag):
            count += 1
    return count

if __name__ == "__main__":
    target_directory = "."
    print(f"当前工作目录: {os.getcwd()}")
    
    processed_count = process_markdown_files(target_directory)
    print(f"处理完成！共处理了 {processed_count} 个markdown文件")
    logging.info(f"任务完成，共处理了 {processed_count} 个文件")
