import React from 'react'
import './Landing.css'
import CompanyLogos from '../../Images/logos.png'
import StatCard from '../../Components/styles/StatsCard/StatCard'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <div className="landing-container">

      <h1 className='landing-title'>The Data Science Union</h1>
      <h3 className='landing-subtitle'>UCLA's Premier Data Science Organization</h3>

      <div className="who-we-are-container">

        <div className="who-we-are-container-child">
          <h2 className="section-title">
            Who We Are
          </h2>
        </div>

        <div className="who-we-are-container-child">
          <p className='for-clients-p'>
            The <p className="emphasized-client-text">
             Data Science Union 
            </p> is a student organization founded in March 2019. Our goal is to cultivate a thriving community of data science professionals at UCLA. The three components of our club: our self-designed curriculum, real-world client projects, and professional development opportunities, prepare our members for careers in data science.
          </p>          
        </div>
        
      </div>

      <div className="stat-container">
        <StatCard number={'60+'} text1={'active'} text2={'members'} className='stats-child'></StatCard>
        <StatCard number={'10+'} text1={'internal'} text2={'projects'} className='stats-child'></StatCard>
        <StatCard number={'5+'} text1={'client'} text2={'projects'}  className='stats-child'></StatCard>
        <StatCard number={'15+'} text1={'companies'} text2={'represented'} className='stats-child'></StatCard>
      </div>

      <div className="for-clients-container">
        <div className="for-clients-container-child">
          <h2 className='section-title'>For Clients</h2>
        </div>

        <div className="for-clients-container-child">
          <p className='for-clients-p'>
            At DSU, our most experienced members work <p className="for-clients-p emphasized-client-text"> pro bono</p> to provide you with <p className="for-clients-p emphasized-client-text">data-driven consulting services</p>. We produce a thorough analysis of your data, so you can better your services with <p className="for-clients-p emphasized-client-text">well-rounded insights</p>.
          </p>
        </div>

        <div className="for-clients-container-child">
        <Link to='/clients'>
        <button className='partner-with-us-btn'>
          Want to partner with us?
        </button>
        </Link>
        </div>  
        
      </div>

      <div className="where-we-work">
        <h2 className='section-title'>Where We've Gone</h2>
        <img src={CompanyLogos} alt = '' className='where-we-work-img'/>
      </div>

    </div>
  )
}

export default Landing