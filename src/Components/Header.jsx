import './Header.css'
import DSULogo from '../Images/DSU-Logo.svg'
import React from 'react'

const Header = () => {
  return (

    <div className='navbar'>
      <div className='logo-container'>
        <a href="/">
          <img src={DSULogo} alt="DSU Logo" className="nav-logo" />
        </a>
      </div>
      <div className='menu-container'>
        <ul>
         <li><a href="/about">About Us</a></li>
         <li><a href="/team">The Team</a></li>
         <li><a href="/projects">Projects</a></li>
         <li><a href="/clients">For Clients</a></li>
         <li><a href="/join">Join Us</a></li>
        </ul>
      </div>    
  </div>
  )
}


export default Header


  // <div className="nav-container">
    // <nav className='nav'>
    //   {/* <div className="logo-container">
    //     <a href="/">
    //       <img
    //       src={DSULogo}
    //       alt="DSU Logo"
    //       className="nav-logo"
    //       />
    //     </a>
    //   </div>        */}
    //   <div className='menu-container'>
    //     <ul>
    //       <li><a href="/about">About Us</a></li>
    //       <li><a href="/team">The Team</a></li>
    //       <li><a href="/projects">Projects</a></li>
    //       <li><a href="/clients">For Clients</a></li>
    //       <li><a href="/join">Join Us</a></li>
    //     </ul>
    //   </div>
    // </nav>
    // </div>
    //   /* <div>
    //     <ul>
    //       <li>
    //         <a href="/about">About Us</a>
    //       </li>
    //       <li>
    //         <a href="/team">The Team</a>
    //       </li>
    //       <li>
    //         <a href="/projects">Projects</a>
    //       </li>
    //       <li>
    //         <a href="/clients">For Clients</a>
    //       </li>
    //       <li>
    //         <a href="/join">Join Us</a>
    //       </li>
    //     </ul>

    //   </div> */