import React from 'react'
import './Landing.css'
import Logos from '../Images/logos.png'
import Stats from '../Images/stats.png'
const Landing = () => {
  return (
    <div className='landing-container'>
      <h1 className='title'> The Data Science Union</h1>
      <h2>UCLA's Premier Data Science Organization</h2> 

      <div className='who-we-are-container'>
        <h1>Who We Are</h1>
        <p>
          The Data Science Union is a student organization founded in March of 2019. Our goal is to cultivate a thriving community of data science professionals at UCLA. The three components of our club - our self-designed curriculum, real-world projects, and professional development opportunities - prepare members for careers in data science. 
        </p>
      </div>

      <div className='stats-container'>
          <img src={Stats} alt='' className='stats-img' />  
      </div>
      <div className='for-clients-container'>
        <h1 className='for-clients-title'>
          For Clients
        </h1>
        <p className='for-clients-text'>
          At DSU, our most experienced members work pro bono to provide you with data-driven consulting services. We produce a thorough analysis of your data, so you can better your services with well-rounded insights.
        </p>
        <button className='for-clients-button'>
          Want to partner with us?
        </button>
      </div>
      <div className='where-we-work-container'>
        <h1>Where We Work</h1>
        <div className='companies-container'>

          <img src={Logos} alt='' style={{ width: '80vw', margin: '10vw' }} />
        </div>
      </div>
    </div>
  )
}

export default Landing

