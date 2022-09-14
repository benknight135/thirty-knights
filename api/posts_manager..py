import json

class Post:
    def __init__(self, json_file):
        self.title = None
        self.last_updated = None
        self.content = None
        self.location = None


class PostsManager:
    def __init__(self, data_folder):
        self.data_folder = data_folder
        self.__load_posts()

    def __load_posts(self) -> list[Post]:
        posts = []
        return posts