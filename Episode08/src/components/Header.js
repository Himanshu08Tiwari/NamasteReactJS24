import { useState } from "react";
import logo from "../utils/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [Log, setLog] = useState("Login");
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} className="logo"></img>
        </div>
        <h2>Steak House</h2>
      </div>

      <ul className="header-btn">
        <li className="head-list">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>

        <li className="head-list">
          <Link
            to="/Contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact
          </Link>
        </li>

        <li className="head-list">
          <Link to="/About" style={{ textDecoration: "none", color: "white" }}>
            About Us
          </Link>
        </li>
        <li className="head-list">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Cart
          </Link>
        </li>

        <li
          className="login"
          onClick={() => {
            if (Log == "Login") {
              setLog("Logout");
            } else {
              setLog("Login");
            }
          }}
        >
          {Log}
        </li>
      </ul>
    </div>
  );
};

export default Header;
