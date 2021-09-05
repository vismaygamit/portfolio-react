import React from 'react';
import './MainHeader.css';

const MainHeader=props=>{
 
return (
<header id="header" className="fixed-top">
  <div className="container d-flex align-items-center justify-content-between">
    <h1 className="logo"><a href="" style={{textDecoration:"none"}}>Vismay Gamit</a></h1>
     {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>  */}
    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto" href="#tech">TechStack</a></li>
        <li><a className="nav-link scrollto" href="#services">Services</a></li>
        <li><a className="nav-link scrollto " href="#work">Work</a></li>
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
      </ul>
      {/* <i className="bi bi-list mobile-nav-toggle" /> */}
    </nav>
  </div>
</header>
);
};

export default MainHeader;
