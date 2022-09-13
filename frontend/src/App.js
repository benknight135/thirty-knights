import React from "react"
import BlogContainer from "./components/BlogContainer"
import "./App.css";

function App() {
    var api_base_url = "/api"
    if (process.env.REACT_APP_API_URL){
        api_base_url = process.env.REACT_APP_API_URL;
    }
    return (
        <BlogContainer api_base_url={api_base_url} />
    )
}

export default App
