import React from "react";
import "./App.css";

function App() {
  let greeting = '';

  let curDate = new Date();
  curDate = curDate.getHours();

  // this is for date and time 
  const currDate = new Date().toLocaleDateString();
  const curTime = new Date().toLocaleTimeString();
  
  const cssStyle = {
    color: '',
  }

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = 'crimsion';
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = 'yellow';
  } else {
    greeting = "Good Night";
    cssStyle.color = 'black ';
  }

  // const img1 = "https://picsum.photos/200";
  // const img2 = "https://picsum.photos/100";
  // const img3 = "https://picsum.photos/300";

  // inline css
  // const heading = {
  //   textAlign: "center",
  //   color: "white",
  //   textTransform: "capatilize",
  //   backgroundColor: "hotpink",
  //   borderRadius: '10px',
  //   padding: '15px',
  //   height: '20%',
  // };

  return (
    <div className="Greeting">
      {/* style={heading} */}
      <h1 > Hello sir, <span style={cssStyle}> {greeting} </span></h1>
      <br />
      <h3>Today's Date is: { currDate }</h3>
      <h3>Current Time is: { curTime }</h3>
    </div>
  );
}

export default App;
