// import logo from './logo.svg';
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import TextForms from "./Components/TextForms";

// birthday remainder 
import "./index1.css"
import List from "./Components/List"


function App() {
  return (
    <>
        {/* <Navbar title="Start Project" aboutText="About Us" />
      <div className="container my-3">
        <TextForms heading="Enter a text to Analyze" />
      </div> */}

      
      {/* working on birthday reminder  */}
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>

      {/* <Navbar/> */}


    </>
  );
}

export default App;
