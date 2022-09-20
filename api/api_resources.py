import os
import api.endpoints.blog_endpoints
from flask_restful import Api
import api.posts_manager


def add_resources(flask_api: Api, base_url: str, posts_manager: api.posts_manager.PostsManager):
    # add API endpoints
    api.endpoints.blog_endpoints.add_resources(flask_api, base_url, posts_manager)
