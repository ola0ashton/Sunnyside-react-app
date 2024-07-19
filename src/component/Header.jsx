import React from 'react';
import arrow from '../images/icon-arrow-down.svg'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <header>
      <nav>
        <img src= {logo} alt="logo" />
        <ul>
          <li><a href ='/about'>About</a></li>
          <li><a href='/serivces'>Services</a></li>
          <li><a href ='/projects'>Projects</a></li>
          <li><a href ='/contact'><box>CONTACT</box></a></li>
        </ul> 
      </nav>
      <h1 style={{ color: 'rgb(255, 255, 255)' }}>We are creatives</h1>
      <img src = {arrow} alt="arrow down" className="arrow" />   
    </header>
  );
}

export default Header;