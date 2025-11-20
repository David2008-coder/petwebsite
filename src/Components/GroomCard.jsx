import React from 'react'
import './GroomCard.css'

const GroomCard = ({name, info, image}) => {
  return (
    <div className='groom-card'>
      <div>
        <img className='groom-img' src={image} alt="" />
      </div>
      <div className="groom-info">
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
    </div>
  )
}

export default GroomCard