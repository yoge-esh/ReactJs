import React from 'react'
import ReactDOM from 'react-dom'
// import App, {hello, myname, myName} from './App'
import App from './App'
// while calling a function with export method dont forget to keep curly bracess 
// import * as datas from './App' // here datas is the object and App is class and below we can see the way to fetch tha data  

// calculator 

ReactDOM.render(
    <>
        <App/>

        {/* <h2>{hello}</h2>  */} {/* using a props to reebder a data */}

        {/* Exporting and importing using functions */}
        {/* <h2>{datas.default}</h2> first value will be default herre  */}

        {/* <h3>{myname()}</h3> */}
        {/* <h3>{datas.myname()}</h3> */}

        {/* <h3>{myName}</h3> */}
        {/* <h3>{datas.yourName()}</h3> */}

    </>, 
    document.getElementById('root')
)