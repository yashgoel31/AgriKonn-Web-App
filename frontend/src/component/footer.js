// Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About AgriKonn</h3>
          <p>Experience the goodness of AgriKonn </p>
          <div className="social-media">
            <a href="https://www.facebook.com"><img src="/assest/facebook.png" alt="Facebook" className="social-icon" /></a>
            <a href="https://www.gmail.com"><img src="/assest/gmail.png" alt="Gmail" className="social-icon" /></a>
            <a href="https://www.whatsapp.com"><img src="/assest/watsapp.png" alt="WhatsApp" className="social-icon" /></a>
            <a href="https://www.twitter.com"><img src="/assest/twitter.png" alt="Twitter" className="social-icon" /></a>
            <a href="https://www.instagram.com"><img src="/assest/instagram.webp" alt="insta" className="social-icon" /></a>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@AgriKonn.com</p>
          <p>Phone: 123-456-7890</p>
          <form className="feedback-form">
            <input type="text" placeholder="Enter your feedback" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="footer-categories">
          <h3>Product Categories:</h3>
          <ul className="category-list">
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Seeds</li>
            <li>Crops</li>
            <li>Equipments</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024 AgriKonn Products. All rights reserved.</p>
    </footer>
  );
};

export default Footer;