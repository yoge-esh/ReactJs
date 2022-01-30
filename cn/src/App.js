import React from "react";
import CustomNavber from "./Components/CustomNavber/CustomNavber";
import Footer from "./Components/Footer/Footer";
import Health from "./Pages/Health/Health";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="main-container">
          <div className="container">
            <h2>News App</h2>
            <p>
              Belive in Yourself <span>!</span> Make a attitude of
              <span> "I am the One"</span>
            </p>
          </div>
          <div className="navbar">
            <CustomNavber />
          </div>
          <div className="inner-card">
            <div className="inner-cards">
              <div className="inner-nav">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/health" render={() => <Health />} />
                </Switch>
              </div>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
