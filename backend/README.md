# Backend

The backend creates an API that is accessable to the frontend website as well as for direct interaction via API calls. This is written in Python and uses [Flask](https://flask.palletsprojects.com/en/2.2.x/).

## Setup
Install python & pip
```
sudo apt install python3 python3-pip
```
Create a virutal environment and install the required Python packages:
```bash
cd ./backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements
```

See [frontend](../frontend/README.md) for details on setting up the frontend.

## Run
### API Only
```bash
cd ./backend
source venv/bin/activate
flask run 
```

### With Frontend
Start the website frontend:
```bash
cd ./frontend
yarn start
```
Then in another terminal start the backend api using:
```bash
cd ./frontend
yarn start-api
```