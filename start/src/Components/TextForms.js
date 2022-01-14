import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("Enter a text here.....");

  // convert to uppercase 
  const handelClick = () => {
    console.log("Uppercase clicked!" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  // convert to lowercase
  const handelloClick = () => {
    console.log("lowercase clicked!" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  // cleat data from text area 
  const handelClearClick = () => {
    console.log("clear data!" + text);
    let newText = "";
    setText(newText);
  };

  // convert to Title 
  const handelCapClick = () => {
    console.log("Title Clicked!" + text);
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  };

  const handleOnClick = (event) => {
    console.log("on clicked");
    setText(event.target.value);
  };


  // remove an extra spaces 
  const extraSpaces = () =>
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  // // functions to make a dark mode 
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

  // const [btntext, setBtnText] = useState("Enable Dark mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Liark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  //   console.log('enable dark and light mode')
  // };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="12"
            // enabling the dark bode in text area 
            // style = {myStyle}
            style={{backgroundColor: props.mode === 'dark'?'light':'white', color:props.mode === 'dark'?'white':'black'}} 
            onChange={handleOnClick}
            value={text}
          ></textarea>
        </div>


{/* buttons */}
        {/* converts to upper case */}
        <button className="btn btn-primary mx-1" onClick={handelClick}>
          Convert to Uppercase
        </button>

        {/* convert text to lower case  */}
        <button className="btn btn-primary mx-1" onClick={handelloClick}>
          Convert to Lowercase
        </button>

        {/* capitalize the color */}
        <button className="btn btn-primary mx-1" onClick={handelCapClick}>
          Capatialize
        </button>

        {/* to copy the text to clipboard */}
        <button
          className="btn btn-primary mx-1"
          onClick={() => navigator.clipboard.writeText(text)}
        >
          Copy to clipboard
        </button>

        {/* switch between dark and light maode  */}
        {/* <button className="btn btn-primary mx-1" onClick={toggleStyle}>
          {btntext}
        </button> */}

        {/* remove extra spaces */}
        <button className="btn btn-primary mx-1" onClick={extraSpaces}>
          Remove Extra Spaces
        </button>

        {/* clear the text area */}
        <button className="btn btn-primary mx-1" onClick={handelClearClick}>
          Clear
        </button>

      </div>

      <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text summary is here</h2>
        <p>
          {text.split(" ").length} words and {text.length} length
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read the given data</p>
      </div>

     
    </>
  );
}
