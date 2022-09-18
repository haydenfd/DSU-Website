import React from 'react'
import './Landing.css'
import Logos from '../Images/logos.png'
import Stats from '../Images/stats.png'
import About from '../Images/who-we-are.png'

const Landing = () => {
  return (
    <div className='landing-container'>
      <h1 className='title'> The Data Science Union</h1>
      <h2>UCLA's Premier Data Science Organization</h2> 

      <div className='who-we-are-container'>
        <img src = {About} alt = '' className='about-img' />
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

          <img src={Logos} alt='' style={{ width: '80vw', margin: '5vw' }} />
        </div>
      </div>
    </div>
  )
}

export default Landing

