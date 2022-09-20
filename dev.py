from flask import Flask
from api import init_app

app = Flask(__name__)
app = init_app(app, debug=True)
