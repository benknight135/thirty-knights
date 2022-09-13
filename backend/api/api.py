import time
import os
from flask import Flask
from flask_restful import Api
import api_resources

# create and configure the app
app = Flask(__name__, instance_relative_config=True)

# ensure the instance folder exists
try:
    os.makedirs(app.instance_path)
except OSError:
    pass

# initalise API
api = Api(app)

# add API endpoints
base_url = "/api"
api_resources.add_resources(api, base_url)