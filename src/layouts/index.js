import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div class='container'>
    <Helmet title="Peter Hironaka | Web Developer" />

    <Navbar />

    <div>{children()}</div>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
