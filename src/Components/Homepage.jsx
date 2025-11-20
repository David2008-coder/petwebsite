import React, { useState } from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

function HomePage({setFirstName, firstName}) {
  const navigate =  useNavigate()
  const [user, setUser] = useState('')
  
  function handleSubmit() {
    if (user === 'pet owner') {
      navigate('/sign-in')
    } else if(user === 'vet') {
      navigate('/veterinarian')
    } else if (user === 'shelter') {
      navigate('/animal-shelter')
    }

    
  }

  return (
    <div className="homepage">
      <h1 className="brand">FurEver Care</h1>

      <div className="homepage-container">
        <div className="homepage-left">
          <h2 className="welcome">Welcome To The Family!</h2>
          <p className="subtitle">
            Let's get you set up. Tell us a little about yourself to personalize your experience
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="input-field" />

            <div className="role-select">
              <label>
                <input type="radio" value='pet owner' onChange={(e)=>setUser(e.target.value)} name="role" /> Pet Owner
              </label>
              <label>
                <input value='vet' type="radio" onChange={(e)=>setUser(e.target.value)} name="role" /> Veterinarian
              </label>
              <label>
                <input value='shelter' type="radio" onChange={(e)=>setUser(e.target.value)} name="role" /> Animal Shelter
              </label>
            </div>

            <button type="submit"  className="submit-btn">Let's Go!</button>
          </form>
        </div>

        <div className="homepage-right">
          <img src="public/images/Goldenretriever.jpg" alt="Golden Retriever" className="dog-image" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;