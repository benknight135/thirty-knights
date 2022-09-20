import os
import json
import time
from glob import glob
from typing import List


class Post:
    def __init__(self, filepath: str):
        self.last_modified = self.__get_file_last_modified(filepath)
        markdown_lines = self.__read_markdown(filepath)
        self.title = self.__extract_title(markdown_lines)
        self.content = self.___extract_content(markdown_lines)

    def __read_markdown(self, filepath: str):
        f = open(filepath, "r")
        return f.readlines()
    
    def __get_file_last_modified(self, filepath: str):
        modified_time = os.path.getmtime(filepath)
        time_str = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(modified_time))
        return time_str

    def __extract_title(self, markdown_lines: List[str]):
        # title is in the first line of the markdown file
        # title will always be formatted with '# title'
        # so remove '# ' (e.i the first two characters)
        return markdown_lines[0][2:]

    def ___extract_content(self, markdown_lines: List[str]):
        # skip first line as this holds the title
        content_text = ""
        for line in markdown_lines[1:]:
            content_text += line + "\n"
        return content_text

    def to_json(self):
        return {
            'last_modified': self.last_modified,
            'title': self.title,
            'content': self.content
        }


class PostsManager:
    def __init__(self, data_folder: str):
        self.data_folder = data_folder
        self.posts = []
        self.refresh_posts()

    def refresh_posts(self) -> List[Post]:
        post_files = glob(
            os.path.join(self.data_folder, "*.md"))
        posts = []
        for post_file in post_files:
            posts.append(Post(post_file))
        self.posts = posts

    def get_posts(self):
        return self.posts