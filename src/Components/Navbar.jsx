import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src="/images/GoldenRetriever-removebg-preview.png" alt="logo" />
        <Link to='/' className='logo'>FurEver Care</Link>
        
      </div>

      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-right ${menuOpen ? "active" : ""}`}>
        <ul>
          <Link to='/pet-care'>
            <li>Pet Care</li>
          </Link>

          <Link to='/contact-us'>
            <li>Contact</li>
          </Link>

          <Link to='/pet-product'>
            <li>Product</li>
          </Link>
          
          
         <Link to='/emergency'>
            <li>Emergency</li>
          </Link>
         
         <Link to='/feedback'>
            <li>Feedback</li>
          </Link>

          <Link to='/about-us'>
            <li>About</li>
          </Link>
        
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
