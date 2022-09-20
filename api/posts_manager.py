import os
import json
import time
from glob import glob
from typing import List, TypedDict
import requests
from bs4 import BeautifulSoup
import re


class PostDict(TypedDict):
    title: str
    content: str
    timestamp: str


class Post:
    def __init__(self, post_lines):
        self.title = self.__extract_title(post_lines)
        self.timestamp = self.__extract_timestamp(post_lines)
        self.content = self.___extract_content(post_lines)

    def __extract_title(self, post_lines: List[str]):
        # title is in the first line of the markdown file
        # title will always be formatted with '# title'
        # so remove '# ' (e.i the first two characters)
        return post_lines[0][2:]

    def __extract_timestamp(self, post_lines: List[str]):
        # timestamp is in the second line of the markdown file
        # timestamp will always be formatted with '## timestamp'
        # so remove '## ' (e.i the first three characters)
        return post_lines[1][3:]

    def ___extract_content(self, post_lines: List[str]):
        # skip first line as this holds the title
        content_text = ""
        for line in post_lines[2:]:
            content_text += line + "\n"
        return content_text

    def to_json(self) -> PostDict:
        return {
            'title': self.title,
            'content': self.content,
            'timestamp': self.timestamp
        }

    def __str__(self) -> str:
        return str(self.to_json())


class LocalPost(Post):
    def __init__(self, filepath: str):
        post_lines = self.__read_markdown(filepath)
        super().__init__(post_lines)

    def __read_markdown(self, filepath: str):
        f = open(filepath, "r")
        return f.readlines()


class GitHubPost(Post):
    def __init__(self, url: str):
        post_lines = self.__read_raw_post(url)
        super().__init__(post_lines)

    def __read_raw_post(self, url: str):
        result = requests.get(url)
        soup = BeautifulSoup(result.text, 'html.parser')
        lines = soup.text.splitlines()
        return lines


class PostsManager:
    def __init__(self, posts: List[Post] = []):
        self._posts = posts

    def set_posts(self, posts: List[Post] = []) -> None:
        self._posts = posts

    def get_posts(self) -> List[Post]:
        return self._posts


class LocalPostsManager(PostsManager):
    def __init__(self, data_folder: str):
        self.data_folder = data_folder
        super().__init__([])
        self.refresh_posts()

    def refresh_posts(self) -> None:
        post_files = glob(
            os.path.join(self.data_folder, "*.md"))
        posts = []
        for post_file in post_files:
            post = LocalPost(post_file)
            posts.append(post)
        super().set_posts(posts)


class GitHubPostsManager(PostsManager):
    def __init__(self, owner: str, repository_name: str, branch: str, folder_path: str):
        self._posts_folder_url = self.__get_posts_folder_url(owner, repository_name, branch, folder_path)
        self._raw_posts_base_url = self.__get_raw_posts_base_url(owner, repository_name, branch, folder_path)
        super().__init__()
        self.refresh_posts()

    def __get_posts_folder_url(self, owner: str, repository_name: str, branch: str, folder_path: str):
        return "https://github.com/" + owner + "/" + repository_name + "/tree/" + branch + "/" + folder_path

    def __get_raw_posts_base_url(self, owner: str, repository_name: str, branch: str, folder_path: str) -> str:
        return "https://raw.githubusercontent.com/" + owner + "/" + repository_name + "/" + branch + "/" + folder_path

    def __get_raw_post_url(self, filename):
        return self._raw_posts_base_url + "/" + filename

    def refresh_posts(self) -> None:
        result = requests.get(self._posts_folder_url)
        soup = BeautifulSoup(result.text, 'html.parser')
        found_md_files = soup.find_all(title=re.compile("\.md$"))
        posts = []
        for found_md_file in found_md_files:
            md_filename = found_md_file.extract().get_text()
            raw_url = self.__get_raw_post_url(md_filename)
            post = GitHubPost(raw_url)
            posts.append(post)
        super().set_posts(posts)