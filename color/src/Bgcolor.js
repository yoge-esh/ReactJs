import React, { useState } from "react";
// import Select from "react-select";
import "./App.css";
function Bgcolor() {
  var color = [
    {
      value: 1,
      lable: "crimson",
    },
    {
      value: 2,
      lable: "green",
    },
    {
      value: 3,
      lable: "blue",
    },
    {
      value: 4,
      lable: "yellow",
    },
    {
      value: 5,
      lable: "red",
    },
  ];

  // var onClick = () =>
  // {
    
  // }
  var [setbgcolor, ddvalue] = useState(color.lable);
  var ddhandle = (e) => {
    ddvalue(e.lable);
  };
  return (
    <div className="container my-3">

      <style>{`body {background-color: ${setbgcolor}}`}</style>
      <h1>Please Check here</h1>
      {/* <Select options={color} onChange={ddhandle} /> */}
      <button onClick={color} onChange={ddhandle}>Click Me</button>
      <center>
        <p>You have selected the : `${setbgcolor}`</p>
      </center>
    </div>
  );
}
export default Bgcolor;
