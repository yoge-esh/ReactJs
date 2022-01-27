import React from "react";
import "./index.css";
function False(props) {
  let {x, y, z} = props
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

export default False;
