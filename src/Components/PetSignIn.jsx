import React from 'react'
import './PetSignIn.css'
import { useNavigate } from 'react-router-dom'
const PetSignIn = ({handleNameInput,name,age, setAge, species, setSpecies, breed, setBreed, vaccine, setVaccine}) => {
  const navigate = useNavigate()
  function handleSubmit() {
    if (name === '' || age==='' ||species=== '' || breed === '' || vaccine === '') {
      alert('Please fill in all the information!')
    }else {
      const petInfo = {
      name,
      breed,
      species,
      age,
      vaccine,
    };

    localStorage.setItem('petInfo', JSON.stringify(petInfo));

    navigate('/pet-care')
   }
  }
  return (
    <div className='container'>
      <div className="sign">
        <div className="header">
          <h1>Pet Profile</h1>
          <p>Manage your pet's information and care schedule</p>
        </div>
        <div className="input-sect">
          <div className="pet-name-input input">
            <p>Pet Name</p>
            <input value={name} onChange={(e)=>handleNameInput(e.target.value)} type="text" placeholder='Rex' />
          </div>
           <div className="species-input input">
            <p>Species</p>
            <input value={species} onChange={(e)=>setSpecies(e.target.value)} type="text" placeholder='Dog'/>
           </div>
           <div className="breed-input input">
            <p>Breed</p>
            <input value={breed} onChange={(e)=>setBreed(e.target.value)}  type="text" placeholder='Golden Retriever'/>
           </div>
           <div className="age input">
            <p>Age</p>
            <input value={age} onChange={(e)=>setAge(e.target.value)}  type="text" placeholder='2 years' />
           </div>
           <div className="vacc-input input">
            <p>Vaccination Schedule</p>
            <input value={vaccine} onChange={(e)=>setVaccine(e.target.value)} type="text" placeholder='Rabies - 01/15/2024' />
           </div>
           <button className='save' onClick={handleSubmit} type="submit">Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default PetSignIn
