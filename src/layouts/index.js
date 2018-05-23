import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pistol from '../img/space-pic.jpg'

import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div class='container'>
     <Helmet>

                <title>Peter Hironaka | Web Developer</title>
                <link rel="canonical" href="https://peterhironaka.com.com/" />
        		<meta name="theme-color" content="#000000" />
        		<meta property="og:type" content="website" />
        		<meta name="twitter:site" content="@peterhironaka" />
        <link rel="icon" type="image/png" sizes="32x32" href={pistol} />

            </Helmet>

    <Navbar />

    <div>{children()}</div>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
