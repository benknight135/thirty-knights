from flask import Flask
from api import create_app

app = create_app(debug=True)
