import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import externalLink from '../img/external-link.svg'
import FadeIn from 'react-fade-in';
import { kebabCase } from 'lodash'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (

          <FadeIn>  

      <section className="section-home">
        <div className="container two">
            <h2> Hello, my name is Peter Hironaka. I’m a Freelance Web Developer based in sunny Los Angeles, California. Here are a few things I’ve recently worked on:</h2>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'project-post')
            .map(({ node: post }) => (
              <div
                className="content-post"
               
                key={post.id}
              >
                 <div
                className="index-content">

     <div
                className="index-content--link">
                

                <h3>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}

                  </Link>
                  
                </h3>
                <div className="index-tags">
 {post.frontmatter.tags.map(tag => (
                    
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  
                  ))}
                  </div>

            </div>

            </div>
            <div className="post-image">
            <img src={post.frontmatter.image} alt={post.frontmatter.title} />
                  
              </div>
                
              </div>
            ))}

            <div className="all-projects">

                  <Link className="has-text-primary" to='/projects'>
                   View all projects >

                  </Link>
              </div>
                  
        </div>
      </section>
          </FadeIn>  

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
            image
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
