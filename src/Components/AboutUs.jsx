import React from "react";
import "./AboutUs.css";
import ContactUs from "./ContactUs";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
     <Navbar />
      <section className="about-section">
     
      <div className="about-container">
        
        {/* Left Side - Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16"
            alt="Happy pets"
          />
          <div className="image-badge">🐶 10+ Years of Love & Care 🐾</div>
        </div>

        {/* Right Side - Text */}
        <div className="about-content">
          <h2>
            About <span>Us</span>
          </h2>
          <p>
            At <strong>FurEver Care</strong>, we believe pets aren’t just 
            animals — they’re family. For over a decade, we’ve been passionate 
            about keeping tails wagging and whiskers twitching through quality 
            care, love, and dedication.
          </p>
          <p>
            From playful puppies to senior cats, our team of animal lovers works 
            tirelessly to ensure every pet feels safe, loved, and happy. 🐾
          </p>

          <div className="about-buttons">
            <button className="btn primary">Meet Our Team</button>
            <Link to="/ContactUs"><button className="btn secondary">Contact Us</button></Link>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default AboutUs;