import React from "react";
import * as calc from "../calculator";

// const hello = 'yogesh how are u doing ?'

function App() {
  return (
    <div>
      {/* -------> Calculator in react <-------- */}
      <h1>Welcome to React Calculator</h1>
      <h2>The Addition between two number is: {calc.Add(2, 4)}</h2>
      <h2>The Division between two number is: {calc.Division(10, 4)}</h2>
      <h2>The Multiplication between two number is: {calc.multi(11, 12)}</h2>
      <h2>The Subtract between two number is: {calc.Subtract(30, 4)}</h2>
    </div>
  );
}

export default App;

// we are only allowed to export only one export default so if we need to export more then we have to do folling steps
