import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/placeholer-logo.svg'

const Footer = () => (
  <footer className="footer is-transparent">
    <div className="container">
      
      <div className="footer-start">
   	
   	<small>
        © {new Date().getFullYear()} Peter Hironaka, All Rights Reserved
      </small>
      
      </div>
      
    </div>
  </footer>
)

export default Footer
