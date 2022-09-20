from flask import Flask
from api import init_app

app = Flask(__name__, static_folder='./build', static_url_path='/')
app = init_app(app, debug=False)
