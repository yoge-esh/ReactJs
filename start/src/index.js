import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Main from './Main'
// import Bgcolor from './Bgcolor'
import reportWebVitals from './reportWebVitals';
import Randomcolor from './Randomcolor';

ReactDOM.render(
  <React.StrictMode>
    {/* my practise file */}
    {/* <App /> */}
    
    {/* CourslyNepal file */}
    {/* <Main/> */}

    {/* test of changing bg color */}
    {/* <Bgcolor/> */}

    <Randomcolor/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
