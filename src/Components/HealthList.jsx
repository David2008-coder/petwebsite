import React from 'react'
import './HealthList.css'
import HealthCard from './HealthCard'

const HealthList = () => {
  return (
    <div>
      <div className="health-sect">
        <div className="health-head">
          <h1>Health and Training Tips</h1>
        </div>

        <div className="health-card-cont">
<HealthCard />
       
        <HealthCard />
        <HealthCard />

        </div>
        
      </div>
    </div>
  )
}

export default HealthList