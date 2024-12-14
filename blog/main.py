import os
import logging
from pathlib import Path

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='insert_operation.log'
)

def insert_author_info(file_path):
    """在markdown文件开头插入作者信息"""
    content = """---
authors: sumingcheng
---
"""
    try:
        # 读取原文件内容
        with open(file_path, 'r', encoding='utf-8') as file:
            original_content = file.read()

        # 写入新内容
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(content + original_content)
        
        logging.info(f"成功处理文件: {file_path}")
        return True
    except Exception as e:
        logging.error(f"处理文件 {file_path} 时出错: {str(e)}")
        return False

def process_markdown_files(directory):
    """遍历目录处理所有.md文件"""
    count = 0
    # 添加调试日志
    print(f"开始扫描目录: {directory}")
    
    # 使用Path对象进行目录遍历
    for file_path in Path(directory).rglob('*.md'):
        print(f"发现文件: {file_path}")  # 添加文件发现提示
        if insert_author_info(file_path):
            count += 1
    return count

if __name__ == "__main__":
    # 设置要处理的目录路径
    target_directory = "."  # 当前目录
    
    print(f"当前工作目录: {os.getcwd()}")  # 添加当前目录提示
    
    # 处理文件并获取处理数量
    processed_count = process_markdown_files(target_directory)
    
    # 输出处理结果
    print(f"处理完成！共处理了 {processed_count} 个markdown文件")
    logging.info(f"任务完成，共处理了 {processed_count} 个文件")
