import "./PetAdoption.css";
import './NavbarB'
import NavbarB from "./NavbarB";

function PetAdoption({firstName}) {
  return (
    <div className="pet-adoption">
      <NavbarB firstName={firstName} />
      <header className="header">
        <h1>PET ADOPTION</h1>
        <p>Find your perfect companion today!</p>
        <button className="cta-btn">Find Your Pet</button>
      </header>

     
      <nav className="nav-buttons">
        <a href="#gallery">Gallery</a>
        <a href="#stories">Success Stories</a>
        <a href="#events">Events</a>
        <a href="#contact">Shelter Contact</a>
      </nav>

      
      <section id="gallery" className="gallery">
        <h2>Filter Pets</h2>
        <div className="filters">
          <select><option>Dog</option></select>
          <select><option>Cat</option></select>
          <select><option>Age</option></select>
        </div>

        <div className="pet-cards">
          <div className="pet-card">
            <div className="pet-img">
            <img className='pet-img' src="bella.jpg" alt="Bella" />
            </div>
            <h3>Bella</h3>
            <p>Age: 2 yr</p>
            <p>Playful and affectionate, loves outdoor walks and cuddles.</p>
            <button>Adopt Me</button>
          </div>

          <div className="pet-card">
            <div className="pet-img">
            <img src="max.jpg" alt="Max" />
            </div>
            <h3>Max</h3>
            <p>Age: 1 yr</p>
            <p>Curious little explorer, enjoys napping in sunny spots</p>
            <button>Adopt Me</button>
          </div>

          <div className="pet-card">
            <div className="pet-img">
            <img src="snow.jpg" alt="Snow" />
            </div>
            <h3>Snow</h3>
            <p>Age: 3 yr</p>
            <p>Gentle and calm, the perfect companion for a quiet home.</p>
            <button>Adopt Me</button>
          </div>
        </div>
      </section>

     
      <section id="stories" className="stories">
        <h2>Success Stories</h2>
        <p>❤ Bella found her forever home...</p>
        <p>🐾 Max is living happily with his new family...</p>
      </section>

      
      <section id="events" className="events">
        <h2>Events</h2>
        <p>📅 Adoption Drive – Sept 25th @ City Park</p>
        <p>📅 Free Vaccination Camp – Oct 3rd</p>
      </section>

      
      <section id="contact" className="contact">
        <h2>Shelter Contact Info</h2>
        <p>📍 123 Pet Lane, Cityville</p>
        <div className="socials">
          <a href="#">🌐</a>
          <a href="#">📘</a>
          <a href="#">📸</a>
        </div>
      </section>
    </div>
  );
}

export default PetAdoption;