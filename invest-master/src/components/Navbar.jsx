import React, { useEffect, useState } from "react";
import './css/Navbar.css'; 
import { useToast } from "@chakra-ui/react";
// import logo from "../logo.svg"
import logo from "../logo.jpeg"

 


const Navbar = () => {

  // const isLoggedIn = window.localStorage.getItem("loggedIn");
  const [menuOpen,setMenuOpen] = useState(false)
  const [loggedIn,setLoggedIn] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);
  
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setLoggedIn(false);
    toast({
      title: "Logout Successful",
      description: "You have successfully logged out.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    window.location.href = "/";
  };

    return (
      <nav className="navbar">
        {/* Left side logo */}
        <div className="navbar__left">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </div>
  
        {/* Right side options */}
        <div className="navbar__right">
          <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen)
          }}>
      <span></span>
      <span></span>
      <span></span>
          </div>
          <ul className={`navbar__list ${menuOpen ? 'open' : ''}`}>
          <li className="navbar__item"><a href="/">Home</a></li>
          <li className="navbar__item"><a href="/stocks">Stocks</a></li>
            <li className="navbar__item"><a href="/portfolio">Portfolio</a></li>
            {loggedIn ? (
            <li className="navbar__item"><a href="#" onClick={handleLogout}>Logout</a></li>
          ) : (
            <>
              <li className="navbar__item"><a href="/sign-in">Login</a></li>
              <li className="navbar__item"><a href="/sign-up">SignUp</a></li>
            </>
          )}
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;