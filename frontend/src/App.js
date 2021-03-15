import React, {useState} from "react";
import './App.css'
import UserHistory from "./Components/UserHistory/UserHistory";
import Result from './Components/Result/Result';

const App = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleChange = event => {
    setUrl(event.target.value)
  }

  const addUrl = url => {
    let copyOfUrls = [...history, url]
    setHistory(copyOfUrls)
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
      setUrl("")
      addUrl(url)
      setResult(res)
    })
  }

  return (
    <div>
      <h1>Welcome to the frontend!</h1>
      <form onSubmit={handleSubmit}>
        <h2>Make a Request</h2>
        <label htmlFor="url">Input your url</label>
        <input
          type="text"
          onChange={handleChange} 
          value={url} 
          placeholder="ex: https://example.com/large.txt"
          required
        />
        <input type="submit" value="Send to the backend" />
      </form>
      <UserHistory history={history}/>
      <Result result={result}/>
    </div>
  );
}

export default App;
