from flask import Flask
from flask_restful import Api
import api.api_resources as api_resources

app = Flask(__name__)

# initalise API
api = Api(app)

# add API endpoints
base_url = "/api"
api_resources.add_resources(api, base_url)
