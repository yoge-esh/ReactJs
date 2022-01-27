import React from "react";
import CustomNavber from "./Components/CustomNavber/CustomNavber";
import Footer from "./Components/Footer/Footer";
import Health from "./Pages/Health/Health";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="main-container">
          <div className="container">
            <h2>News App</h2>
            <p>Belive in Yourself <span>!</span> Make a attitude of <span> "I am the One"</span></p>
          </div>
          <div className="navbar">
            <CustomNavber />
          </div>
          <div className="inner-card">
            <div className="inner-cards">
              <div className="inner-nav">
                <Switch>
                  <Route exact path="/" render={() => <Home />}>
                    <h2>This is Home page Rendering</h2>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                  </Route>
                  <Route exact path="/health" render={() => <Health />}>
                  <h2>This is Health page Rendering</h2>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                    <p>
                      This is inner card place Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Veritatis, temporibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis ipsa ut voluptatibus qui provident dignissimos,
                      non voluptatum nisi ex nobis porro, accusantium
                      perferendis, odit hic? Veritatis accusantium provident
                      ratione debitis inventore consectetur omnis recusandae in
                      numquam beatae facilis, ad quas nemo quisquam odio aut
                      fuga, laborum vero quae. Impedit, incidunt!
                    </p>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
          <div className="footer">
            {/* footer */}
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
