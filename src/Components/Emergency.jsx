import React from "react";
import "./Emergency.css";
import Navbar from "./Navbar";

const Emergency = () => {
  return (
    <main className="emergency-container">
      <Navbar />
      <div className="emergency-wrapper">
        {/* Header Section */}
        <div className="emergency-header">
          <h1>Emergency &amp; Vet Help</h1>
          <p>
            Quick access to essential contacts and nearby vet locations for your
            pet's urgent needs.
          </p>
        </div>

        {/* Grid Section */}
        <div className="emergency-grid">
          {/* Contacts Section */}
          <div className="contacts">
            <div className="card">
              <h3>Important Contacts</h3>
              <div className="em-contact-list">
                <div className="em-contact-item">
                  <div className="em-contact-info">
                    <span className="material-symbols-outlined icon">
                      🏥
                    </span>
                    <span className="label">Vet Contact</span>
                  </div>
                  <a href="tel:1-800-VET-HELP">1-800-VET-HELP</a>
                </div>

                <div className="em-contact-item">
                  <div className="em-contact-info">
                    <span className="material-symbols-outlined icon">
                      🔬
                    </span>
                    <span className="label">Poison Helpline</span>
                  </div>
                  <a href="tel:1-800-POISON-PET">1-800-POISON-PET</a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map">
            <div className="em-card">
              <h3>Nearby Vet Clinics</h3>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12613.626998949822!2d-122.4194156!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d7a829a7%3A0x8633fa17b447833a!2sVeterinary%20Emergency%20Group!5e0!3m2!1sen!2sus!4v168434343434"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nearby Vet Clinics"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Emergency;
