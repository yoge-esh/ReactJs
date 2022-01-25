import React from 'react';
import Card from './Card'
import './index.css'
import datas from './data';


// Normal arrow function 
// function ncards(val) {
//   return (
//     <Card 
//     imgsrc={val.imgsrc} 
//     title = {val.title}
//     Name={val.Name}
//     link={val.link}
//     />
//   )
// }

function App() {

  return (
  <div>
    <h1 className='heading'>welcome to Top image Galary of the world</h1>
      
      {/* fat arrow function */}
      {datas.map((val, index) => {
        return (
          <Card 
          imgsrc={val.imgsrc} 
          title = {val.title}
          Name={val.Name}
          link={val.link}
          />
        )
      })};
  </div>
  );
}

export default App;
