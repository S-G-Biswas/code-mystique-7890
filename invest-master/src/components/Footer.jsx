// Footer.js

import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './css/Footer.css';
import logo from '../logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
      <span className='footerLogo'>
  <img className='footerLogoImg' src={logo} alt="Logo" />
  
</span>
        <div className="footer-content">
          <div className="footer-section about footer-links footer-section links">
            <h2 className='hTwo'>About Us</h2>
            <ul>
              <li><a href="#">About Invest Master</a></li>
              <li><a href="#">Blog Section</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Business Contact</a></li>             
              <li><a href="#">Authenticity Check</a></li>
            
              
            </ul>
            
            
            {/* <div className="footerSocial-icons">
              <a href="#" className="footerIcon"><FaFacebook /></a>
              <a href="#" className="footerIcon"><FaTwitter /></a>
              <a href="#" className="footerIcon"><FaInstagram /></a>
            </div> */}
          </div>

          <div className="footer-links footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links footer-section links">
            <h2>Our Services</h2>
            <ul>
              <li><a href="#">Buy Stocks</a></li>
              <li><a href="#">Markets</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Trading</a></li>
              <li><a href="#">Referral</a></li>
            </ul>
          </div>

          <div className="footer-links footer-section links">
            <h2>Support</h2>
            <ul>
              <li><a href="#">Learn</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Submit a Request</a></li>
            </ul>
          </div>

          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form className='footer-form'>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 InvestMaster, All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
