import { useState } from "react";
import logo from "../utils/logo.jpg";

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
        <li>Home</li>
        <li>orders</li>
        <li>About Us</li>
        <li>Cart</li>
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
