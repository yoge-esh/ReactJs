import React, { useState } from "react";

function App() {
    // states are also called hooks in js 
    // we should use this only inside a function 
  const [count, setcount] = useState(0); // useState holds a  initial value 

  const increment = () => {
    setcount(count +1); // increase the initial value on click 
    console.log('the initial value is increment by 1')
  };
  const decrement = () =>
  {
      setcount(count -1); // dectrement the initial value on click
      console.log('the initial value is decrement by 1')
    }
    
    const mult = () =>
    {
        setcount(count *5); // multiply the initial value by five 
        console.log('the initial value is multiply by 5')
  }

  return (
    <div>
      <h2>Welcome to useState : {count}</h2>
      <button onClick={increment}>Click here to increment</button>
      <button onClick={decrement}>Click here to dectrement</button>
      <button onClick={mult}>Click here to multiply</button>
    </div>
  );
}

export default App;
