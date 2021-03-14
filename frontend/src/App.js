import React, {useState} from "react";
import './App.css'
import UserHistory from "./Components/UserHistory/UserHistory";
import Result from './Components/Result/Result';

const App = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [urls, setUrls] = useState([]);

  const handleChange = event => {
    setUrl(event.target.value)
  }

  const addUrl = url => {
    let copyOfUrls = [...urls, url]
    setUrls(copyOfUrls)
  }

  const handleSubmit = event => {
    event.preventDefault();

    fetch("http://localhost:8080/url", {
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        url
      })
    })
    .then(response => response.json())
    .then(res => {
      console.log(res)
      setUrl("")
      addUrl(url)
      setResult(res)
    })
  }

  return (
    <div>
      <h1>Welcome to the frontend!</h1>
      <form onSubmit={handleSubmit}>
        <label>Input your url</label>
        <input
          type="text"
          onChange={handleChange} 
          value={url} 
          placeholder="url..."
        />
        <input type="submit" value="Send to the backend" />
      </form>
      <UserHistory urls={urls}/>
      <Result result={result}/>
    </div>
  );
}

export default App;
