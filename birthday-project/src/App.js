import React, { useState } from "react";
import "./App2.css"
import JSONDATA from './MOCK_DATA.json'

const App = () => {
  // const [people, setPeople] = useState(data);
  const [searchText, setSearchtext] = useState("");

  return (
    <div className="App2">
      <input
        type="text"
        placeholder="serach hare ..."
        onChange={(event) => {
          setSearchtext(event.target.value);
        }}
      />
      {JSONDATA.filter = ((val) => {
          if (searchText === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div key={key}>
              <p>{val.name}</p>
            </div>
          );
        })}
      <section className="container">
        <h3>{data.length} Birthdays Today</h3>
        <p>people={people}</p>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </div>
  );
};

export default App;
