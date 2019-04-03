import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import FadeIn from 'react-fade-in';
import Layout from '../components/Layout'
import styled from "styled-components"
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

const Image = styled.img`
    max-width: 100%;
    border-radius:0;
`

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr ;
  padding: 0 2em;
  margin-bottom:4em;

  ul {
    margin:1em 0;
  }

  p {
    margin:1em 0;
  }

  h2 {
    margin:2em 0;
  }


  a {
    border-bottom:1px solid;
    line-height:2.3;
  }
`



export const AboutPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
          <FadeIn>  
          <Helmet
            titleTemplate="%s | Peter Hironaka"
          >
            <title>{`About`}</title>
          </Helmet>
             <AboutSection>
              <Img fluid={image.childImageSharp.fluid} alt={title} name={title}/>
              <PageContent className="about-content" content={content} />
            </AboutSection>
         </FadeIn>  

    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
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
      image={post.frontmatter.image}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
