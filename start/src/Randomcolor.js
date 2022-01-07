import React, {useState} from 'react'
import "./App.css";
export default function Randomcolor() {
    const [color, setColor] = useState('crimson'); 
    const useColor = ['green', 'red', 'blue', 'yellow']
const selectColor = () =>
{
    let colors = useColor[Math.floor(Math.random() * useColor.length)]
    setColor (colors)
}
    return (
        <div className = "container my-5" style={{backgroundColor: `${color}`, minHeight: "60vh", overflow: 'hidden', zoom: 1.1}}>
            <h1>{color}</h1>
            <button onClick={selectColor}>Click here</button>
        </div>
    )
}
