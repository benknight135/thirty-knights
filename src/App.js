import React from "react"
import Blog from "./components/Blog"
import "./App.css";

function App() {
    var api_base_url = "/api"
    if (process.env.REACT_APP_API_URL){
        api_base_url = process.env.REACT_APP_API_URL;
    }
    return (
        <Blog api_base_url={api_base_url} />
    )
}

export default App
