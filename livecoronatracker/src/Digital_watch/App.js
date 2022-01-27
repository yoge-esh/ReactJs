import React, { useState } from "react";
import "./App.css";

function App() {
  // states are also called hooks in js
  // we should use this only inside a function
  var time = new Date().toLocaleTimeString();
  const [ctime, setDate] = useState(time); // useState holds a  initial value

  const getTime = () => {
    setDate((time = new Date().toLocaleTimeString()));
    console.log(`Current Time is ${time}`);
  };

  // to automate the time in page
  setInterval(getTime, 1000); // 1000 milisec === 1 sec

  return (
    <div>
      <h2 className="heading">
        Current Time : <span>{ctime}</span>
      </h2>
      {/* we have made the automation time so we are not using this button */}
      {/* <button onClick={getTime}>Current Time</button> */}
    </div>
  );
}

export default App;
