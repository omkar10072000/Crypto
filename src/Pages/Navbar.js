import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div>
    <nav className="navbar">
      <div className="navbar-brand" style={{color : "yellow" , fontweight: "bold", margin: "15px", fontfamily: "Montserrat",fontSize:"40px"}}>Crypto Hunter</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Login</a>
        </li>
      </ul>
    </nav>
    </div>
    <div>
    <h2 class="MuiTypography-root MuiTypography-h2" style= {{textAlign:"center", color:"white",fontweight: "bold", margin: "15px", fontfamily: "Montserrat",fontSize:"70px"}}>Crypto Hunter</h2>
    <h6 class="MuiTypography-root MuiTypography-subtitle2" style= {{textAlign:"center",color: "darkgrey" , texttransform: "capitalize", fontfamily: "Montserrat",fontSize:"20px"}}>
      Get all the Info regarding your favorite Crypto Currency </h6>  
    </div>
    </div>
  );
};

export default Navbar;
