import React from 'react';
import image from '../images/icon-facebook.svg'
import image1 from '../images/icon-instagram.svg'
import image2 from '../images/icon-twitter.svg'
import image3 from '../images/icon-pinterest.svg'
import logo1 from '../logo copy.svg'

const Footer = () => {
  return (
    <footer>
      <img src= {logo1} alt="logo" />
      <ul>
        <li><a href='/about'>About</a></li>
        <li><a href='/serivces'>Services</a></li>
        <li><a href='/project'>Project</a></li>
      </ul>
      <div>
        <img src= {image} alt="Facebook" />
        <img src= {image1} alt="Instagram" />
        <img src= {image2} alt="Twitter" />
        <img src= {image3} alt="Pinterest" />
      </div>
    </footer>
  );
}

export default Footer;