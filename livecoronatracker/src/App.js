import React from 'react';
import './App.css'

function App() {

  const bgChnage = () =>{
    console.log('clicke!')
  }
  return(
  <div style={ {backgroundColor: "crimsion"} }>
      <h2>Welcome to Events in React Js </h2>
      <button onClick={bgChnage}>Click me</button>
  </div>
  );
}

export default App;
