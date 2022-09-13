import time
import os
from flask import Flask
from flask_restful import Api
import api_resources

# create and configure the app
script_path = os.path.abspath(os.path.dirname(__file__))
frontend_build_path = os.path.join(script_path, "..", "..", "frontend", "build")
app = Flask(__name__, static_folder=frontend_build_path, static_url_path='/')

# initalise landing page
@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

# initalise API
api = Api(app)

# add API endpoints
base_url = "/api"
api_resources.add_resources(api, base_url)
