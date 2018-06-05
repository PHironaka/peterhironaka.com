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

      <ul className="social">
        <li><a href="https://instagram.com/peterhironaka" target="_blank">Instagram</a></li>
        <li><a href="https://twitter.com/peterhironaka" target="_blank">Twitter</a></li>
        <li><a href="https://codepen.io/peterhironaka" target="_blank">Codepen</a></li>


      </ul>
      
      </div>
      
    </div>
  </footer>


)

export default Footer
