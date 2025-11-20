import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavbarB({firstName}) {


  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src="/images/GoldenRetriever-removebg-preview.png" alt="logo" />
       <Link to='/'>FurEver Care</Link>
      </div>


      <div className={`nav-right`}>
        <h1 className='welcome'>Welcome {firstName}!!</h1>
      </div>
    </div>
  );
}

export default NavbarB;
