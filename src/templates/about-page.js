import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import pistol from '../img/space-pic.jpg'
import FadeIn from 'react-fade-in';
import Layout from '../components/Layout'
import styled from "styled-components"

const Image = styled.img`
    max-width: 170px;
    border-radius: 50%;
    @media screen and (max-width: 800px) {
    max-width: 100%;
    border-radius:0;
  }
`

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media screen and (max-width: 800px) {
  grid-template-columns: 1fr ;
  }

  a {
    border-bottom:1px solid;
    line-height:2.3;
  }
`



export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
          <FadeIn>  
            
             <AboutSection>
              <Image src={pistol} alt="about image"/>
              <PageContent className="about-content" content={content} />
            </AboutSection>
         </FadeIn>  

    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>

    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
        </Layout>

  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
