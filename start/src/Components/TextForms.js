import React , {useState} from "react";

export default function TextForms(props) {
    const [text, setText] = useState('Enter a text here.....')
    const handelClick =() =>{
        console.log('Uppercase clicked!' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnClick = (event) =>
    {
        console.log('on clicked');
        setText(event.target.value);
    }

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="12"
        //   placeholder= {text}
          onChange={handleOnClick}
        value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handelClick}>Convert to Uppercase</button>
    </div>
  );
}
