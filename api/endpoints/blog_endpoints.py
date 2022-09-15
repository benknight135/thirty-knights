from flask_restful import Api
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
    API enpoint to get current server time
    """

    def __init__(self, **kwargs):
        self.posts_manager = kwargs['posts_manager']

    def get(self):
        """
        get current server time

        Returns
        -------
        tuple, int
            response (json), status code
        """
        posts = self.posts_manager.get_posts()
        print(posts)
        res_posts = []
        for i, post in enumerate(posts):
            post_json = post.to_json()
            post_json['key'] = str(i)
            res_posts.append(post_json)
        res = {'posts': res_posts}
        return res


def add_resources(flask_api: Api, base_url: str, posts_manager: api.posts_manager.PostsManager):
    # add API endpoints
    flask_api.add_resource(
        TimeEndpoint, base_url + '/time')

    flask_api.add_resource(
        PostsEndpoint, base_url + '/posts',
        resource_class_kwargs={
            'posts_manager': posts_manager})
