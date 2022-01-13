import React, { useState } from "react";
import data from "./data";
import List from "./Component/List";
import "./App.css";

export default function App() {
  const [people, setPeople] = useState(data);
  const [searchText, setSearchtext] = useState("");
  return (
    <div className="App">
      <main>
        <section className="container">
          {/* <input
            type="text"
            placeholder="serach hare ..."
            onChange={(event) => {
              setSearchtext(event.target.value);
            }}
          /> */}
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
    </div>
  );
}
