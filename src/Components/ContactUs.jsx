import React from "react";
import "./ContactUs.css";
import Navbar from "./Navbar";


const ContactUs = () => {
  return (
    
    <section className="contact-section">
      <Navbar />
      <div className="contact-container">
        {/* Left side - Form */}
        <div className="contact-form">
          <h2>
            Get in <span>Touch</span> 🐾
          </h2>
          <p>
            Have a question or want to book an appointment for your furry
            friend?  
            Send us a message and we’ll get back to you as soon as possible!
          </p>

          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your full name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Type your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>

        {/* Right side - Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>We’d love to hear from you! 🐶🐱</p>

          <ul>
            <li>
              <strong>📍 Address:</strong> 123 Pet Street, Lagos, Nigeria
            </li>
            <li>
              <strong>📞 Phone:</strong> +234 800 123 4567
            </li>
            <li>
              <strong>✉ Email:</strong> hello@pawfectfriends.com
            </li>
          </ul>

          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.737449875329!2d3.3792055152468255!3d6.524379325322012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4b4c524cf13%3A0x549f6dfd14c2e8a7!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1673330000000!5m2!1sen!2sng"
              width="100%"
              height="220"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Dog Image */}
      {/* <div className="contact-dog">
        <img src={dogImage} alt="Happy dog" />
      </div> */}
    </section>
  );
};

export default ContactUs;