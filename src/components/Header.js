import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            src= {LOGO_URL}
            alt="food-app-logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => { btnName === "Login" ?setBtnName("Logout") : setBtnName("Login") }}>{btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;