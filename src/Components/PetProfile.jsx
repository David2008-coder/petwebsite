import React from 'react'
import cats from '../../public/animals.png'
import './PetProfile.css'
import FeedingGuide from './FeedingGuide'
import GroomList from './GroomList'
import HealthList from './HealthList'
import Navbar from './Navbar'
const PetProfile = ({name,breed,age,species,vaccine}) => {
  return (
    <>
    <Navbar />
      <div className='profile-cont'>
       
        <div className='profile-info'>
         
        <div className="name-age">
          <p className='name'>{name}</p>
          <p className='age'>{age}years</p>
        </div>
        <div className="line"></div>
            <p className='info'><b>Breed:</b> {breed}</p>
            <p className='info'><b>Specie:</b> {species}</p>
            <p className='info'><b>Vaccine Schedule: </b> {vaccine}</p>
        
        </div>
        <div className='profile-img'>
          <img src={cats} alt="" />
        </div>
      </div>
      <FeedingGuide />
      <GroomList />
      <HealthList />
    </>
  )
}

export default PetProfile