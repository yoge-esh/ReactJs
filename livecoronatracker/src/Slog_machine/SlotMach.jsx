import React from "react";
import "./index.css";

const SlotM = (props) => {
let {x, y, z} = props

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h2>This is Matching</h2>
          <hr />
        </div>
      </>
    );
  } else{
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h2>This is Not Matching</h2>
          <hr />
        </div>
      </>
    );
  }
};

export default SlotM;