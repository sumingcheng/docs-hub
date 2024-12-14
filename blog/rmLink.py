import os
from pathlib import Path
import logging

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='remove_link_operation.log'
)

def remove_link_line(content):
    """删除包含 Link: [https://zhuanlan.zhihu.com/p/xxxxxx] 的行"""
    lines = content.split('\n')
    filtered_lines = [line for line in lines if not line.strip().startswith('Link: [https://zhuanlan.zhihu.com/p/')]
    return '\n'.join(filtered_lines)

def process_file(file_path):
    """处理单个文件"""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # 删除知乎链接
        new_content = remove_link_line(content)

        # 只有在内容发生变化时才写入文件
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            logging.info(f"成功移除链接: {file_path}")
            return True
        return False
    except Exception as e:
        logging.error(f"处理文件 {file_path} 时出错: {str(e)}")
        return False

def process_markdown_files(directory):
    """遍历目录处理所有.md文件"""
    count = 0
    print(f"开始扫描目录: {directory}")
    
    for file_path in Path(directory).rglob('*.md'):
        print(f"处理文件: {file_path}")
        if process_file(file_path):
            count += 1
    return count

if __name__ == "__main__":
    target_directory = "."
    print(f"当前工作目录: {os.getcwd()}")
    
    processed_count = process_markdown_files(target_directory)
    print(f"处理完成！共处理了 {processed_count} 个markdown文件")
    logging.info(f"任务完成，共处理了 {processed_count} 个文件")