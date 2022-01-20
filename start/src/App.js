import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForms from "./Components/TextForms";
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light'); // state variable to ckeck the dark mode enable or not to check from, here 

  // making an switch case to enable dark and light mode 
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      // document.body.style.textColor = 'white';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      // document.body.style.textColor = 'dark';
    }
  }
  return (
    <>
      <Navbar title="Start Project" aboutText="About Us" mode = {mode} toggleMode = {toggleMode}/>

      <div className="container my-3">
        <TextForms heading="Enter a text to Analyze" mode = {mode}/>

        {/* <TextForms/> */}

        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
