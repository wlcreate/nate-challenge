import React, {useState} from "react";
import UserHistory from "./Components/UserHistory/UserHistory"

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
    <div className="App">
      <h1>Welcome to the frontend!</h1>
      <form onSubmit={handleSubmit}>
        <label>Input your url</label>
        <input onChange={handleChange} value={url} />
        <input type="submit" value="Send to the backend" />
      </form>
      <UserHistory urls={urls}/>
      <div>
        <h2>Result</h2>
        {result && Object.keys(result).map((key, i) => {
          return <p key={i}>
            <span>Text: {key} </span>
            <span>Num of Occurrences: {result[key]}</span>
          </p>
        })}
      </div>
    </div>
  );
}

export default App;
