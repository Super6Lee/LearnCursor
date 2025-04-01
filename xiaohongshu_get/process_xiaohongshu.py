import pandas as pd
import requests
from bs4 import BeautifulSoup
import logging
import time
import os

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def read_cookie():
    """读取cookie文件"""
    try:
        with open('cookie', 'r', encoding='utf-8') as f:
            cookie = f.read().strip()
        logger.info("成功读取cookie文件")
        return cookie
    except Exception as e:
        logger.error(f"读取cookie文件失败: {str(e)}")
        raise

def read_excel():
    """读取Excel文件"""
    try:
        excel_path = os.path.join('resources', '12月航海小红书演示数据使用.xlsx')
        df = pd.read_excel(excel_path)
        logger.info(f"成功读取Excel文件: {excel_path}")
        return df
    except Exception as e:
        logger.error(f"读取Excel文件失败: {str(e)}")
        raise

def get_note_content(url, headers):
    """获取笔记内容和话题标签"""
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 获取笔记详情
        detail_desc = soup.find(id='detail-desc')
        detail_text = detail_desc.text if detail_desc else ''
        
        # 获取话题标签
        hash_tags = soup.find(id='hash-tag')
        tags = []
        if hash_tags:
            tag_elements = hash_tags.find_all('a')
            tags = [tag.text for tag in tag_elements]
        
        logger.info(f"成功获取笔记内容: {url}")
        return detail_text, ','.join(tags)
    except Exception as e:
        logger.error(f"获取笔记内容失败 {url}: {str(e)}")
        return '', ''

def main():
    """主函数"""
    try:
        # 读取cookie
        cookie = read_cookie()
        
        # 设置请求头
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Cookie': cookie
        }
        
        # 读取Excel
        df = read_excel()
        
        # 添加新列
        df['笔记详情'] = ''
        df['笔记话题'] = ''
        
        # 处理每一行数据
        for index, row in df.iterrows():
            url = row[0]  # 第一列是笔记地址
            logger.info(f"正在处理第 {index + 1} 条数据: {url}")
            
            # 获取笔记内容和话题
            detail, tags = get_note_content(url, headers)
            
            # 更新数据
            df.at[index, '笔记详情'] = detail
            df.at[index, '笔记话题'] = tags
            
            # 添加延时避免请求过快
            time.sleep(1)
        
        # 保存结果
        output_path = os.path.join('resources', '小红书笔记处理结果.xlsx')
        df.to_excel(output_path, index=False)
        logger.info(f"处理完成，结果已保存至: {output_path}")
        
    except Exception as e:
        logger.error(f"程序执行出错: {str(e)}")
        raise

if __name__ == '__main__':
    main() 