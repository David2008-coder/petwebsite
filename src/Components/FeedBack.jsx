import React from 'react'
import './FeedBack.css'
import Navbar from './Navbar'

const FeedBack = () => {
  return (
    <div className='feed-cont'>
      <Navbar />
      <div className="feedback">
        <div className="feedback-header">
          <h1>We'd love to hear from you</h1>
          <p>Your feedback helps us improve our services for you and your pets</p>
        </div>
        <form action="">
          <div className="name input">
            <p className='feed-p'>Name</p>
            <input type="text" placeholder='Enter your name' />
          </div>
          <div className="email input">
            <p className='feed-p'>Email</p>
            <input type="text" placeholder='Enter your email' />
          </div>

          <div className="thoughts input">
            <p className='feed-p'>Feedback</p>
            <textarea  placeholder='Share your thoughts' />
          </div>

          <button className="feedback-btn">Submit Feedback</button>
        </form>
      </div>
    </div>
  )
}

export default FeedBack