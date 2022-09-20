import React from "react"
import Blog from "./components/Blog"
import "./App.css";

function App() {
    var apiBaseUrl = "/api"
    if (process.env.REACT_APP_API_URL){
        apiBaseUrl = process.env.REACT_APP_API_URL;
    }
    return (
        <Blog apiBaseUrl={apiBaseUrl} />
    )
}

export default App
