from flask_restful import Resource, reqparse
from flask_json import FlaskJSON, JsonError, json_response, as_json
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


class PostsInfoEndpoint(Resource):
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
        post_infos = [
            {"title": "First post"},
            {"title": "Second post"},
            {"title": "Third post"},
        ]
        res_post_infos = []
        for i, post_info in enumerate(post_infos):
            post_info['key'] = str(i)
            res_post_infos.append(post_info)
        res = {'info': res_post_infos}
        return res


def add_resources(api, base_url):
    # add API endpoints
    api.add_resource(
        TimeEndpoint, base_url + '/time')

    api.add_resource(
        PostsInfoEndpoint, base_url + '/postsinfo')
