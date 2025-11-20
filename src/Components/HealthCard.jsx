import React from 'react'
import './HealthCard.css'

const HealthCard = () => {
  return (
    <div className='health-card'>
       <div className="health-img">
        <img src="../../public/cute-cats.jpg" alt="" />
       </div>
       <div className="health-info">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laudantium quaerat sequi optio odio molestias dolores facilis ab culpa temporibus?</p>
        <button className='learn-btn'>Learn More</button>
       </div>
    </div>
  )
}

export default HealthCard