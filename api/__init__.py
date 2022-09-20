import os
from flask import Flask
from flask_restful import Api as Flask_Api
import api.endpoints as endpoints
import api.posts_manager as posts_mngr
from enum import Enum

class PostsManagerType(Enum):
    Local = 0
    GitHub = 1

def init_app(app: Flask, debug: bool = True):
    if debug:
        posts_manager_type = PostsManagerType.Local
    else:
        @app.route('/')
        def index():
            return app.send_static_file('index.html')

        @app.errorhandler(404)
        def not_found(e):
            return app.send_static_file('index.html')

        posts_manager_type = PostsManagerType.GitHub

    data_folder = os.path.join(
        os.path.abspath(os.path.dirname(__file__)), "data")

    # initalise API
    flask_api = Flask_Api(app)

    # initalise posts manager
    if posts_manager_type == PostsManagerType.Local:
        posts_folder = os.path.join(data_folder, "posts")
        posts_manager = posts_mngr.LocalPostsManager(posts_folder)
    elif posts_manager_type == PostsManagerType.GitHub:
        owner = "benknight135"
        repo = "thirty-knights"
        branch = "main"
        folder_path = "api/data/posts"
        posts_manager = posts_mngr.GitHubPostsManager(
            owner, repo, branch, folder_path
        )

    # add API endpoints
    base_url = "/api"
    endpoints.Endpoints(flask_api, base_url, posts_manager)

    return app
