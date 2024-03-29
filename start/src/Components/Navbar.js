import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">

          {/* <a className="navbar-brand" href="/">
            {props.title}
          </a> */}

          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>

                {/* <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a> */}

              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> 
                  {props.aboutText}
                </Link>

                {/* <a className="nav-link" href="/about">
                  {props.aboutText}
                </a> */}

              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          {/* using an turnary operator to make a text of nav bar change accordingly */}
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}> /
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

// propTypes()
Navbar.prototype = {
  // propsName.ptototype.string => saying that there must be string value, other is not acceptable
  // is we pass number here now, it will throw an error
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

// isRequired()
// isRequired : means must have value in place of that props
Navbar.prototype = {
  title: PropTypes.string.isRequired, // now the title is required, but as we are passing an default value it wont throw and error,
};

// default props
//  default props : incase we dont keep the valeu then the default value will be assign in place of title and about
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "set about here",
};
