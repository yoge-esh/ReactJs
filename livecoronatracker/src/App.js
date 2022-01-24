import React from "react";
import './App.css'


function App() {
  const fname = "yogesh";
  const curDate = new Date().toLocaleDateString();
  const curTime = new Date().toLocaleTimeString();
  const img1 = "https://picsum.photos/200";
  const img2 = "https://picsum.photos/100";
  const img3 = "https://picsum.photos/300";

  // inline css
  const heading = {
    textAlign: 'center',
    color: 'crimsion',
    textTransform: 'capatilize'
  }
  return (
    <div>
      
      <h1 style={heading}>Welcome to React Programming with {fname}</h1>

      <p className="fix">Current Date: {curDate}</p>
      <p className="fix">Current Time: {curTime}</p>
      <img src={img1} alt="random images" />
      <img src={img2} alt="random images" />
      <a href="https://picsum.photos/" rel="noreferrer" target={'_blank'}>
        <img src={img3} alt="random images" />
      </a>
    </div>
  );
}

export default App;
