import React, { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);

    const { value, name } = event.target;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
          address: preValue.address,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
          address: preValue.address,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
          address: preValue.address,
        };
      } else if (name === "number") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
          address: preValue.address,
        };
      } else if (name === "address") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
          address: value,
        };
      }
    });
  };
  const submit = (event) => {
    event.preventDefault();
    alert("form submmitted");
  };
  return (
    <>
      <div>
        <h2>
          Welcome to React Form: {fullName.fname} {fullName.lname}
        </h2>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <p>{fullName.address}</p>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter your First Name..."
            name="fName"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <input
            type="text"
            placeholder="Enter your last Name..."
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
          />
          <input
            type="email"
            placeholder="Enter your Email..."
            name="email"
            onChange={inputEvent}
            value={fullName.email}
          />
          <input
            type="number"
            placeholder="Enter your phone Number..."
            name="number"
            onChange={inputEvent}
            value={fullName.phone}
          />
          <input
            type="address"
            placeholder="Enter your address..."
            name="address"
            onChange={inputEvent}
            value={fullName.address}
          />
          <button type="submit">Click Me</button>
        </form>
      </div>
    </>
  );
}

export default App;
