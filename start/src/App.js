import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";


function App() {
  return (
    <>
        <Navbar title="Start Project" aboutText="About Us" />
      <div className="container my-3">
        <TextForms heading="Enter a text to Analyze" />
      </div>


      {/* <Navbar/> */}


    </>
  );
}

export default App;
