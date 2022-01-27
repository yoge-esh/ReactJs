import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [updates, setNewsUpdates] = useState([]);

  const [search, setSearchQuery] = useState("react");

  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=react"
  );

  const findnews = () => {
    //   find news base on react
    fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
      // convert to json
      .then((result) => result.json())

      // set New Objects
      .then((data) => setNewsUpdates(data.hits))
        // .then((data) => console.log(data))  // display in colsole

      // catching news update error
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //   fetching the data from above function
    findnews();
  }, [url]);

  const makeChange = (r) => {
    //   base on user input, this will search the value from API
    setSearchQuery(r.target.value);
  };

  const handleInput = (e) => [
    //   prevent from page behaviour
    e.preventDefault(),
    setUrl(`https://hn.algolia.com/api/v1/search?query=${search}`),
  ];

  return (
    <div>
      <h2>News App</h2>

      <form onSubmit={handleInput}>
        <input type="text" value={search} onChange={makeChange} />
        <button>Search News here</button>
      </form>

      {updates.map((n, i) => (
        <div className="content">
          <h2 key={i}>{n.title}</h2>
          <img src={n.url} alt="img from API" />
          {/* <h5>{n.text} hello</h5> */}
        </div>

      ))}
    </div>
  );
}

export default App;
