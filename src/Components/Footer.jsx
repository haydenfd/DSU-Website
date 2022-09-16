import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../Images/facebook-logo.svg'
import Instagram from '../Images/instagram-logo.svg'
import Github from '../Images/github-logo.svg'
import Linkedin from '../Images/linkedin-logo.svg'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='flex-child'>
        <ul>
          <li>
            <Link to="/team">The Team</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/clients">For Clients</Link>
          </li>
          <li>
            <Link to="/join">Join Us</Link>
          </li>
        </ul>
      </div>
      <div className='flex-child'>
        <div className='footer-subcontainer'>
          <div className='flex-child-sub copyright'>
          <h3><sup>©</sup> Copyright 2022 Data Science Union<br/> all rights reserved  </h3>
          </div>
          <div className='flex-child-sub flex-subsubcontainer'>
            <a href = 'https://www.facebook.com/DSUatUCLA/' target='_blank' rel ='noreferrer' className="logo-hover">
            <img src={Facebook} alt=''/>
            </a>
            <a href = 'https://www.instagram.com/p/CPeLC_0sdyM/' target='_blank' rel ='noreferrer' className="logo-hover">
            <img src={Instagram} alt=''/>
            </a>            
            <a href = 'https://github.com/the-data-science-union' target='_blank' rel ='noreferrer' className="logo-hover">
            <img src={Github} alt=''/>
            </a>
            <a href = 'https://www.linkedin.com/company/the-data-science-union-at-ucla/' target='_blank' rel ='noreferrer' className="logo-hover">
            <img src={Linkedin} alt=''/>
            </a>            
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer