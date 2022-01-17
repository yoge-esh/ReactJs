import React, {useState} from 'react'
import '../src/App.css'
export default function App() {
  const {count, setCount} = useState(0)
  return (
    <div className='Main-App'>
        <h1>I am a parent {count}</h1>
        <button onClick={(e) => setCount(count+1)}>Increment on click</button>
        <button onClick={(e) => setCount(count-1)}>Decrement on click</button>

        <Child1 count = {count}/>
        <Child2 count = {count}/>
    </div>
  )
}

// child - 1
const Child1 = ({count}) =>
{
  return(
    <div className='child1'>
      <h1>i am child_1 {count}</h1>
      <Child1A count = {count}/>
      <Child1B count = {count}/>
    </div>
  )
}

// child1A
const Child1A = ({count}) =>
{
  return (
    <div className='Child1A'>
      <h2>i am child 1A</h2>
        <Child1Aa count = {count}/>
    </div>
  )
}

// Child1Aa
const Child1Aa = ({count}) =>
{
  return (
    <div className="child1Aa">
      <h3>i am child of child1Aa {count}</h3>
    </div>
  )
}

// Child1B
const Child1B = ({count}) =>
{
  return (
    <div className='Child1B'>
      <h2>i am child 1B</h2>
        <Child1Ba count = {count}/>
    </div>
  )
}

// child1Ba
const Child1Ba = ({count}) =>
{
  return (
    <div className="child1Ba">
      <h3>i am child of child1Ba {count}</h3>
    </div>
  )
}


// child - 2
const Child2 = ({count}) =>
{
  return(
    <div className='child2'>
      <h1>i am child_2 {count}</h1>
        <Child2A count = {count}/>
        <Child2B count = {count}/>
    </div>
  )
}

// Child 2A
const Child2A = ({count}) =>
{
  return (
    <div className='Child2A'>
      <h2>i am child 1A {count}</h2>
        <Child2Aa count = {count}/>
    </div>
  )
}

// child 2Aa
const Child2Aa = ({count}) =>
{
  return (
    <div className='Child2Aa'>
      <h3>i am child of child 2Aa {count}</h3>
       
    </div>
  )
}

// child 2B
const Child2B = ({count}) =>
{
  return (
    <div className='Child2B'>
      <h2>i am child 1B {count}</h2>
        <Child2Ba count = {count}/>
    </div>
  )
}

// child 2Ba
const Child2Ba = ({count}) =>
{
  return (
    <div className='Child2Ba'>
      <h3>i am child of child 2Ba {count}</h3>
       
    </div>
  )
}