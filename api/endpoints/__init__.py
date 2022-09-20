import os
import api.endpoints.blog_endpoints as blog_endpoints
from flask_restful import Api as Flask_Api
import api.posts_manager

class Endpoints:
    def __init__(self, flask_api: Flask_Api, base_url: str, posts_manager: api.posts_manager.PostsManager):
        # add API endpoints
        blog_endpoints.BlogEndpoints(flask_api, base_url, posts_manager)
