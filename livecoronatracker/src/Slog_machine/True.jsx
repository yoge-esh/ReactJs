import React from "react";
import "./index.css";
function True(props) {
  // let {x, y, z} = props
  return (
    <>
      <div className="slot_inner">
        <h1>
          {props.x} {props.y} {props.z}
        </h1>
        <h2>This is Matching</h2>
        <hr />
      </div>
    </>
  );
}

export default True;
