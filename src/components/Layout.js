import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from './Navbar'
import Footer from './Footer'
import pistol from '../img/space-pic.jpg'
import './all.scss'

const TemplateWrapper = ({ children }) => (
	
  <div class='container'>
     <Helmet>
     <html lang="en" />
                <title>Peter Hironaka | Web Developer</title>
                <link rel="canonical" href="https://peterhironaka.com/" />
        		<meta name="theme-color" content="#000000" />
            <meta property="og:url" content="https://peterhironaka.com" />
            <meta property="og:title" content="Peter Hironaka" />
            <meta property="og:locale" content="en_US" />
            <meta name="description" content="Peter Hironaka is a Freelance Web Developer based in Los Angeles." />
        		<meta property="og:type" content="website" />
            <meta property="og:image" content={pistol} />
            <meta name="twitter:card" content="summary" />
        		<meta name="twitter:site" content="@peterhironaka" />
            <meta name="twitter:title" content="Peter Hironaka" />
            <meta name="twitter:url" content="https://peterhironaka.com" />
            <meta name="twitter:description" content="Peter Hironaka is a Freelance Web Developer based in Los Angeles." />
          <meta name="twitter:image" content="https://peterhironaka.com/static/space-pic.0271d58c.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href={pistol} />

      </Helmet>


    <Navbar />
<div>{children}</div>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper