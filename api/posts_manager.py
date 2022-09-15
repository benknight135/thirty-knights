import os
import json
import time
from glob import glob
from typing import List


class Post:
    def __init__(self, filepath: str):
        self.last_modified = self.__get_file_last_modified(filepath)
        self.content = self.__read_content(filepath)

    def __read_content(self, filepath):
        f = open(filepath, "r")
        return f.read()
    
    def __get_file_last_modified(self, filepath):
        modified_time = os.path.getmtime(filepath)
        time_str = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(modified_time))
        return time_str

    def to_json(self):
        return {
            'last_modified': self.last_modified,
            'content': self.content
        }


class PostsManager:
    def __init__(self, data_folder: str):
        self.data_folder = data_folder
        self.posts = []
        self.__load_posts()

    def __load_posts(self) -> List[Post]:
        post_files = glob(
            os.path.join(self.data_folder, "*.md"))
        posts = []
        for post_file in post_files:
            posts.append(Post(post_file))
        self.posts = posts

    def get_posts(self):
        return self.posts