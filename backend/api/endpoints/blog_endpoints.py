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


def add_resources(api, base_url):
    # add API endpoints
    api.add_resource(
        TimeEndpoint, base_url + '/time')
