import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForms from "./Components/TextForms";

function App() {
  return (
    <>
      <Navbar title="Start Project" aboutText="About Us" />
      <div className="container my-3">
        {/* <TextForms heading="Enter a text to Analyze" /> */}

        <TextForms/>

        <About/>
      </div>

    </>
  );
}

export default App;
