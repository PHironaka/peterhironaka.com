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
     <html lang="en" />
                <title>Peter Hironaka | Web Developer</title>
                <link rel="canonical" href="https://peterhironaka.com/" />
        		<meta name="theme-color" content="#000000" />
        		<meta property="og:type" content="website" />
        		<meta name="twitter:site" content="@peterhironaka" />
          <meta name="description" content="Peter Hironaka is a Freelance Web Developer based in Los Angeles." />
          <meta name="twitter:image" content={pistol} />
          <meta property="og:image" content={pistol} />
        <link rel="icon" type="image/png" sizes="32x32" href={pistol} />

      </Helmet>


    <Navbar />
<div>{children()}</div>
<div className="loader">
      <div><svg width="62" height="65" viewBox="0 0 87 91" xmlns="http://www.w3.org/2000/svg">
  <g id="Archive" fill="none" fill-rule="evenodd">
    <g id="Work-Copy" transform="translate(-76)">
      <g id="Group" transform="translate(76)">
        <path id="Rectangle-2" fill="#000" d="M0 0h87v91H0z"/>
        <path d="M36.56 31.3h-5.14V40h-2.55V19.7h7.69c3.85 0 6.03 2.2 6.03 5.8 0 3.6-2.18 5.8-6.03 5.8zm-5.14-2.44h5.08c2.29 0 3.45-1.13 3.45-3.36s-1.16-3.36-3.45-3.36h-5.08v6.72zm24.68 4.7V19.7h2.55v13.8c0 2.18-.58 3.86-1.74 5.02a6.2 6.2 0 0 1-4.5 1.71 5.97 5.97 0 0 1-4.28-1.56 6.74 6.74 0 0 1-2.03-3.95l2.58-.55c.46 2.3 1.77 3.63 3.74 3.63 2.29 0 3.68-1.37 3.68-4.24zM39.46 61V52.7H42V73h-2.55v-9.57h-8.94V73h-2.55V52.7h2.55V61h8.94zm19.69 9.8V73H46.79v-2.2h4.9V54.9h-4.9v-2.2h12.36v2.2h-4.9v15.9h4.9z" id="PJ-HI" fill="#FFF"/>
      </g>
    </g>
  </g>
</svg></div>
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
