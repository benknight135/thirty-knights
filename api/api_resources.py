import os
import api.posts_manager
import api.endpoints.blog_endpoints
from flask_restful import Api


def add_resources(flask_api: Api, base_url: str, data_folder: str):
    # initalise posts manager
    posts_folder = os.path.join(data_folder, "posts")
    posts_manager = api.posts_manager.PostsManager(posts_folder)

    # add API endpoints
    api.endpoints.blog_endpoints.add_resources(flask_api, base_url, posts_manager)
