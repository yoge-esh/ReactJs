import React from "react";
import "./index.css";
import { SlotM } from "./SlotMach";
function App() {
  return (
    <>
      <h2 className="heading_style">
        welcome to <span style={{ fontWeight: "bold" }}> slot machine </span>
      </h2>
      <div className="slotmachine">
        <SlotM x = '😊' y='😊' z = '😊'/>
        <SlotM x = '😞' y='😊' z = '😊'/>
        <SlotM x = '😊' y='😞' z = '😊'/>
        <SlotM x = '😊' y='😊' z = '😊'/>
        
      </div>
    </>
  );
}

export default App;
