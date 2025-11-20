import React from 'react'
import { groomingTips } from '../data'
import GroomCard from './GroomCard'
import './GroomList.css'

const GroomList = () => {
  return (
    <div className="groom-sect">
      <div className='groom-cont'>
        <div className="groom-head">
           <h1>Grooming videos</h1>
           <p>Learn how to groom your pet through our expert-led tutorials, from nail trimmings to bathing..</p>
        </div>
     

      <div className="groomList">
        {
          groomingTips.map(tips=>(
            <GroomCard key={tips.id} name={tips.tip} info={tips.info} image={tips.image} />
          ))
        }
      </div>
    </div>
   </div>
   
    
  )
}

export default GroomList