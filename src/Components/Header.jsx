import './Header.css'
import DSULogo from '../Images/DSU-Logo.svg'
import React, {useRef, useState} from 'react'
import {
  Link,
} from 'react-router-dom'

const Header = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (
        <div></div>
  //   <div className='Navbar'>
  //     <div className='leftSide'>
  //       <ul className='links'>
  //         <li>
  //           <Link to="/team">The Team</Link>
  //         </li>
  //         <li>
  //           <Link to="/projects">Projects</Link>
  //         </li>
  //         <li>
  //           <Link to="/clients">For Clients</Link>
  //         </li>
  //         <li>
  //           <Link to="/join">Join Us</Link>
  //         </li>
  //       </ul>        

  //     </div>
  //     <div className='rightSide'>
        
  //     </div>      
  //    <div className='navbar'>
  //     <div className='logo-container'>
  //       <Link to="/">
  //         <img src={DSULogo} alt="DSU Logo" className="nav-logo" />
  //       </Link>
  //     </div>
  //     <div className='menu-container'>
  //     </div>
  // </div>
    
  )
}


export default Header