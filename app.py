from flask import Flask
from flask_restful import Api
import api.api_resources as api_resources

app = Flask(__name__, static_folder='./build', static_url_path='/')

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
