# Frontend

The frontend presents the blog website. This works by interacting with the backend API. The frontend is written in Javascript and uses [React](https://reactjs.org/).

## Setup
Install nodejs & npm
```
sudo apt install nodejs npm
```
Install package dependencies:
```
cd ./frontend
npm install
```
See [backend](../backend/README.md) for details on setting up the API backend.

## Start
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
