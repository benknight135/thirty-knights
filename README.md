# Thirty Knights
Travel blog for inter-railing trip

[Visit the website](https://blog.thirtyknights.com/)

## Deployment
This website is deployed to Heroku using GitHub actions.
To release a new version go to the Actions tab on GitHub and trigger a new 'release'.
You will need to choose a release level, choose from `major`, `minor`, or `patch`.
This will be use for automatic versioning of the release.

## Backend
The backend creates an API that is accessable to the frontend website as well as for direct interaction via API calls. This is written in Python and uses [Flask](https://flask.palletsprojects.com/en/2.2.x/).

### Setup
Install python & pip
```
sudo apt install python3 python3-pip
```
Create a virutal environment and install the required Python packages:
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements
```

## Frontend
The frontend presents the blog website. This works by interacting with the backend API. The frontend is written in Javascript and uses [React](https://reactjs.org/).

### Setup
Install nodejs & npm
```
sudo apt install nodejs npm
```
Install package dependencies:
```
npm install
```

## Run locally
```bash
yarn start
```
