import './Header.css'
import DSULogo from '../Images/DSU-Logo.svg'
import React from 'react'
import {
  Link,
  NavLink,
} from 'react-router-dom'

const Header = () => {
  return (

    <div className='navbar'>
      <div className='logo-container'>
        <Link to="/">
          <img src={DSULogo} alt="DSU Logo" className="nav-logo" />
        </Link>
      </div>
      <div className='menu-container'>
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
          {/* <li>
            <a href="/clients">For Clients</a>
          </li>
          <li>
            <a href="/join">Join Us</a>
          </li> */}
        </ul>
      </div>    
  </div>
  )
}


export default Header