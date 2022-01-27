import React from "react";
import CustomNavber from "./Components/CustomNavber/CustomNavber";
import Footer from "./Components/Footer/Footer";
import Health from "./Pages/Health/Health";
import Home from "./Pages/Home/Home"
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h2>News App</h2>
          <p>Belive in Yourself ! Make a attitude of "I am the One"</p>
          <CustomNavber />
        </div>
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
