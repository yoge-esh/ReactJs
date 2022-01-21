import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForms from "./Components/TextForms";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // state variable to ckeck the dark mode enable or not to check from, here

  // making an switch case to enable dark and light mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      // document.body.style.textColor = 'white';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.textColor = 'dark';
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Start Project"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div className="container my-3">
          <Switch>
            {/* home page */}
            <Route exact path="/">
              <TextForms heading="Enter a text to Analyze" mode={mode} />
            </Route>

            {/* about page */}
            <Route exact path="/about">
              <About />
            </Route>
            {/* <Route path="/:user" component={User} /> */}

            {/* no mathch */}
            {/* <Route component={NoMatch} /> */}
          </Switch>

          {/* <TextForms/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
