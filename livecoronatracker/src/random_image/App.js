import React from "react";
import "./index.css";
import Images from "./Images";
import Image_Galary from "./Image_Galary";

const choice = "image_Galary";

// the following code is shorten with turnary operator  
// // use of if/else codition 
// const Choices = () => {
//   if (choice === "images") {
//     return <Images />;
//   } else {
//     return <Image_Galary />;
//   }
// };

function App() {
  return (
    <>
      <h1 className="heading">welcome to Top image Galary of the world</h1>

      {/* shorten the if/else condition code with trunary operator  */}
      {choice === 'images' ? <Images /> : <Image_Galary/>}
    </>
  );
}

export default App;
