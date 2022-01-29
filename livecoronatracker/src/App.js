import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState("");

  //   shows user input full name after hello
  //   const [firstName, setfirstName] = useState('');

  //   const [lastName, setLastName] = useState('');

  //   const [LastName, setlastName] = useState('');

  const inputEvent = (event) => {
    console.log(event.target.value);
    setname(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault(); //prevent default action of form submit which is on page refresh
    alert('form submmitted');

    // setfirstName(name);
    // setlastName(lastName);
  };

  //   const inputEventTwo = (event) => {
  //     setLastName(event.target.value);

  //   };

  return (
    <>
      <div>
        <h2>Welcome to React Form</h2>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter your First Name..."
            onChange={inputEvent}
            value = {fname}
          />
          <input
            type="text"
            placeholder="Enter your Last Name..."
            onChange={inputEvent}
            value={lname}
          />
          {/* value={name} is used to display the value of the input  which is also called as a single source of input*/}

          <button type="submit">Click Me</button>
        </form>
      </div>
    </>
  );
}

export default App;
