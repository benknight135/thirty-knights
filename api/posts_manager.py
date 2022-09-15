import os
import json
from glob import glob
from typing import List


class Post:
    def __init__(self, json_file: str):
        self.title = None
        self.last_updated = None
        self.content = None
        self.location = None


class PostsManager:
    def __init__(self, data_folder: str):
        self.data_folder = data_folder
        self.posts = []
        self.__load_posts()

    def __load_posts(self) -> List[Post]:
        post_files = glob(
            os.path.join(self.data_folder, "*.json"))
        posts = []
        for post_files in post_files:
            json_file = open(post_files)
            json_data = json.load(json_file)
            posts.append(json_data)
        self.posts = posts

    def get_posts(self):
        return self.posts