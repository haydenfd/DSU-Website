import './Footer.css'
import React from 'react'
import Facebook from '../../Images/facebook-logo.svg'
import Instagram from '../../Images/instagram-logo.svg'
import Github from '../../Images/github-logo.svg'
import Linkedin from '../../Images/linkedin-logo.svg'

const Footer = () => {

  return (
    <footer className="footer">

      <section className="logos">
      <a href = 'https://www.facebook.com/DSUatUCLA/' target='_blank' rel ='noreferrer' className="logo-hover">
        <img src={Facebook} alt=''/>
        </a>        
        <a href = 'https://www.instagram.com/p/CPeLC_0sdyM/' target='_blank' rel ='noreferrer' className="logo-hover">
            <img src={Instagram} alt=''/>
        </a>        
        <a href = 'https://www.linkedin.com/company/the-data-science-union-at-ucla/' target='_blank' rel ='noreferrer' className="logo-hover">
          <img src={Linkedin} alt=''/>
        </a>
        <a href = 'https://github.com/the-data-science-union' target='_blank' rel ='noreferrer' className="logo-hover">
          <img src={Github} alt=''/>
        </a>        
      </section>

      <section className="copyright">
        <p className='copyright-p'>© 2023 <b>Data Science Union</b>. <p className='copyright-p copyright-inline-p'> All Rights Reserved.</p>  </p>
      </section>
    </footer>
  )
}
export default Footer