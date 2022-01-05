import React , {useState} from "react";

export default function TextForms(props) {
    const [text, setText] = useState('Enter a text here.....')
    const handelClick =() =>{
        console.log('Uppercase clicked!' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelloClick =() =>{
        console.log('lowercase clicked!' + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handelClearClick =() =>{
        console.log('clear data!' + text);
        let newText = '';
        setText(newText);
    }
    const handelCapClick =() =>{
        console.log('Title Clicked!' + text);
        let newText = text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
    }

    const handleOnClick = (event) =>
    {
        console.log('on clicked');
        setText(event.target.value);
    }
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
          onChange={handleOnClick}
        value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handelClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handelloClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handelCapClick}>Capatialize</button>
      {/* to copy the color  */}
      <button className = 'btn btn-primary mx-1' onClick={() => navigator.clipboard.writeText(text)}>Copy to clipboard</button>
      <button className="btn btn-primary mx-1" onClick={handelClearClick}>Clear</button>
    </div>

    <div className="container my-2">
      <h2>Your Text summary is here</h2>
      <p>{text.split(" ").length} words and {text.length} length</p>
      <p>{0.008 * text.split(" ").length} minutes to read the given data</p>
    </div>
    </>
  );
}
