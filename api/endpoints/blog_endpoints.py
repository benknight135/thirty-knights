from flask_restful import Api as Flask_Api
from flask_restful import Resource, reqparse
from flask_json import FlaskJSON, JsonError, json_response, as_json
import api.posts_manager
import time

class TimeEndpoint(Resource):
    """
    API enpoint to get current server time
    """
    def get(self):
        """
        get current server time

        Returns
        -------
        tuple, int
            response (json), status code
        """
        now = time.time()
        res = {'time': now}
        return res


class PostsEndpoint(Resource):
    """
    API enpoint to get loaded posts
    """

    def __init__(self, **kwargs):
        self.posts_manager = kwargs['posts_manager']

    def get(self):
        """
        get loaded posts

        Returns
        -------
        tuple, int
            response (json), status code
        """
        posts = self.posts_manager.get_posts()
        res_posts = []
        for i, post in enumerate(posts):
            post_json = post.to_json()
            post_json['key'] = str(i)
            post_json['index'] = i
            res_posts.append(post_json)
        res = {'posts': res_posts}
        return res


class RefreshPostsEndpoint(Resource):
    """
    API enpoint to refresh posts
    """

    def __init__(self, **kwargs):
        self.posts_manager = kwargs['posts_manager']

    def get(self):
        """
        refresh posts

        Returns
        -------
        tuple, int
            response (json), status code
        """
        self.posts_manager.refresh()
        res = {'success': True}
        return res


class BlogEndpoints:
    def __init__(self, flask_api: Flask_Api, base_url: str, posts_manager: api.posts_manager.PostsManager):
        # add API endpoints
        flask_api.add_resource(
            TimeEndpoint, base_url + '/time')

        flask_api.add_resource(
            PostsEndpoint, base_url + '/posts',
            resource_class_kwargs={
                'posts_manager': posts_manager})

        flask_api.add_resource(
            RefreshPostsEndpoint, base_url + '/posts/refresh',
            resource_class_kwargs={
                'posts_manager': posts_manager})
