import React, {useState} from 'react'
import "./App.css";
export default function App() {
    const [hex, setHex] = useState("#700b29");
    const randomHexColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // round the number down and return intiger => math.floor 
        // toString => gives hexa code that we need 
        // # => at beganing # is use to make hax color code 
        setHex(randomColor)
    }
    return (
        <div className = "container my-5" style={{backgroundColor: `${hex}`, minHeight: "60vh", overflow: 'hidden', zoom: 1.1}}>
            <h1>{hex}</h1>
            <button onClick={randomHexColor}>Click to get random number</button>
            
        </div>
    )
}



// if we use someone's code to developen something is called are called depeloper 
