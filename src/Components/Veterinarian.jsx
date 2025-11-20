import React from "react";
import "./Veterinarian.css"; 
import NavbarB from "./NavbarB";

function Veterinarian({firstName}) {
  const vets = [
    {
      name: "Dr. Safeyaah Jones",
      specialization: "Surgery",
      image: "images/chioma.jpg",
      contact: "chioma.smith@example.com",
      availability: "Mon 10-2 | Wed 1-5 | Sat 9-12",
    },
    {
      name: "Dr. Tope Smith",
      specialization: "Exotic Pets",
      image: "images/tope.jpg",
      contact: "tope.smith@example.com",
      availability: "Tue 9-12 | Thu 2-6 | Fri 10-3",
    },
    {
      name: "Dr. Steph Lee",
      specialization: "Dermatology",
      image: "images/steph.jpg",
      contact: "steph.lee@example.com",
      availability: "Mon 1-5 | Thu 9-1 | Sat 10-2",
    },
    {
      name: "Dr. David Kim",
      specialization: "Dentistry",
      image: "images/david.jpg",
      contact: "david.kim@example.com",
      availability: "Wed 9-12 | Fri 1-5",
    },
  ];


  const cases = [
    {
      pet: "Bella the Labrador",
      condition: "Hip Dysplasia",
      treatment: "Surgery + Therapy",
      outcome: "Walking and playing again!",
      image: "images/bella.jpg"
    },
    {
      pet: "Max the Persian Cat",
      condition: "Severe Dental Infection",
      treatment: "Dental surgery + antibiotics",
      outcome: "Eating comfortably again!",
      image: "images/max.jpg"
    },
    {
      pet: "Coco the Parrot",
      condition: "Broken Wing",
      treatment: "Fracture repair",
      outcome: "Flying happily again!",
      image: "images/parrot.jpg"
    }
  ];

  return (
    <div className="vet-container">
      <NavbarB firstName={firstName} />
      
      
      <h2>Our Veterinarians</h2>
      <p className="description">
        Meet our team of experienced veterinarians who are here to provide the
        best care for your pets. Explore their profiles, specialties, and case
        studies to know more.
      </p>


      <div className="vet-grid">
        {vets.map((vet, index) => (
          <div className="vet-card" key={index}>
            <img src={vet.image} alt={vet.name} className="vet-img" />
            <h3>{vet.name}</h3>
            <p><strong>Specialization:</strong> {vet.specialization}</p>
            <p><strong>Contact:</strong> {vet.contact}</p>
            <p><strong>Availability:</strong> {vet.availability}</p>
            <button className="book-btn">Book Appointment</button>
          </div>
        ))}
      </div>

      <div className="case-studies">
      <h1>Case Studies</h1>
      <p className="description">
        We're proud of the lives we've touched and the pets we've helped. 
        Here are some of our recent success stories.
      </p>

      <div className="case-grid">
        {cases.map((cs, index) => (
          <div className="case-card" key={index}>
            <img src={cs.image} alt={cs.pet} className="case-img" />
            <h3>{cs.pet}</h3>
            <p><strong>Condition:</strong> {cs.condition}</p>
            <p><strong>Treatment:</strong> {cs.treatment}</p>
            <p><strong>Outcome:</strong> {cs.outcome}</p>
            <button className="read-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Veterinarian;

