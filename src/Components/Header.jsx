import './Header.css'
import DSULogo from '../Images/DSU-Logo.svg'
import React, {useState} from 'react'
import {
  Link,
} from 'react-router-dom'

const Header = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (
  //   <div className='Navbar'>
  //     <div className='leftSide'>


  //     </div>
  //     <div className='rightSide'>
        
  //     </div>
  //    <div className='navbar'>
  //     <div className='logo-container'>

  //     </div>
  // </div>
    <div className='navbar'>
      <div className='left'>
        <Link to="/">
          <img src={DSULogo} alt="DSU Logo" className="nav-logo" />
        </Link>
      </div>
      <div className='right'>
         <ul className='links'>
          {/* <li>
            <Link to="/team">The Team</Link>
          </li> */}
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
    </div>
    
  )
}


export default Header