import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import logo from "../../assets/logo.png";

const Header = () => (
  <header>
    <div className="nav-container">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/process" className="nav-link">Process</Link></li>
          <li><Link to="/partners" className="nav-link">Partners</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
          <button><Link to="/sign-in" className="button-link">Sign In</Link></button>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
