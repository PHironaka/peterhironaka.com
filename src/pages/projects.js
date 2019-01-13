import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import externalLink from '../img/external-link.svg'
import SourceCode from '../img/github-icon.svg'
import FadeIn from 'react-fade-in';
import Layout from '../components/Layout'
import styled from "styled-components"

const ProjectPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2em;
  padding: 2em 0;
  border-bottom: 1px solid #dcdcdc;
  @media screen and (max-width: 800px) {
  grid-template-columns: 1fr ;
  }

  &:last-child {
    border-bottom: none;

`

const ProjectTitle = styled.div`
  h3 {
    margin:0;
  }
`

const VisitSite = styled.div`
  display: grid;
  grid-template-columns: 150px 120px;
  grid-gap:1em;
  margin-top:2em;

  a {
    display: grid;
    grid-template-columns:34px 1fr;

    p {
      margin:0;
    }
  }



`

export default class ProjectPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
          <FadeIn>  

      <section className="section-home">

          {posts
            .filter(post => post.node.frontmatter.templateKey === 'project-post')
            .map(({ node: post }) => (

            
                 <ProjectPost>
                <img src={post.frontmatter.image} alt={post.frontmatter.title} />

                <div className="content-post--project--title">
                <ProjectTitle>
                <h3>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}

                  </Link>
                  
                </h3>
                   </ProjectTitle>       
                <p>
                  {post.excerpt}

                <VisitSite>
                <a className="post-content--external-link" href={post.frontmatter.repo} target="_blank" rel="noopener"><img src={SourceCode} alt="Visit Site"/> <p>Source Code</p></a>
                <a className="post-content--external-link" href={post.frontmatter.project} target="_blank" rel="noopener"><img src={externalLink} alt="Visit Site"/> <p>Visit Site</p></a>
                </VisitSite>

                  
                </p>

                          </div>   

              
                 

            </ProjectPost>
                  
            


            ))}
      </section>
      </FadeIn>

      </Layout>
    )
  }
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
            project
            templateKey
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`
