import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import FadeIn from 'react-fade-in';
import Layout from '../components/Layout'
import styled from "styled-components"

const LatestProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1em 0;

  

  .post-image {
    position: absolute;
    right: 80px;
    bottom: 100px;
    max-width: 250px;
    opacity: 0;
    margin-top: -20px;
    transition: transform .25s;
    vertical-align: bottom;
    transition: .2s;
    transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
  }

  &:hover .post-image{
  opacity:1;
    
  }


`

const ProjectLink = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    line-height: 1;
    padding: 4px 0;

    h3 {
    font-family: 'Quattrocento Sans', sans-serif;    
    font-size: 1.5em;
    font-weight: 300;
    margin: 0;
    line-height: 1.2;
    }
`

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Layout>
       <FadeIn>  
         <section >
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'project-post')
            .map(({ node: post }) => (
              <LatestProjects >
                 <div
                className="index-content">
                <ProjectLink>
                  <h3>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                </ProjectLink>
            </div>
            <div className="post-image">
            <img src={post.frontmatter.image.publicURL} alt={post.frontmatter.title} />
              </div>
              </LatestProjects>
            ))}
      </section>
   </FadeIn> 
 </Layout> 

    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark( limit:12 sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image {
              publicURL
            }
            project
            tags
            templateKey
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`
