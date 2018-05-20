import React from 'react'
import Link from 'gatsby-link'
import github from '../img/github-icon.svg'
import logo from '../img/placeholer-logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 100"><path id="MyPath" fill="none" stroke="red" d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50"></path><text><textPath href="#MyPath">Peter Hironaka</textPath></text></svg>
        </Link>
      </div>
      <div className="navbar-start">


        <Link className="navbar-item" to="/projects">
          Projects
        </Link>

        <Link className="navbar-item" to="/blog">
          Notes
        </Link>


        <Link className="navbar-item" to="/about">
          About
        </Link>
  
      </div>
      
    </div>
  </nav>
)

export default Navbar
