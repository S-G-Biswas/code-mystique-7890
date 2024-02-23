import React from "react";
import './css/Navbar.css'; 
// import logo from "../logo.svg"
import logo from "../logo.jpeg"



const Navbar = () => {
    return (
      <nav className="navbar">
        {/* Left side logo */}
        <div className="navbar__left">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </div>
  
        {/* Right side options */}
        <div className="navbar__right">
          <ul className="navbar__list">
          <li className="navbar__item"><a href="/storepage">Stocks</a></li>
            <li className="navbar__item"><a href="/portfolio">Portfolio</a></li>
            <li className="navbar__item"><a href="/sign-in">Login</a></li>
            <li className="navbar__item"><a href="/sign-up">SignUp</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;