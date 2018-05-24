import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import externalLink from '../img/external-link.svg'
import FadeIn from 'react-fade-in';

export default class ProjectPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section-home">
        <div className="container ">

          {posts
            .filter(post => post.node.frontmatter.templateKey === 'project-post')
            .map(({ node: post }) => (
          <FadeIn>  
              <div
                className="content-post"
                style={{ border: '1px solid #eaecee', padding: '2em 2em' }}
                key={post.id}
              >
                 <div
                className="content-post--project">
                <img src={post.frontmatter.image} alt={post.frontmatter.title} />

                <div className="content-post--project--title">
                <div className="content-post--project--title--links">
                <h3>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}

                  </Link>
                  
                </h3>
            <a className="post-content--external-link" href={post.frontmatter.repo} target="_blank" rel="noopener"><img src={externalLink} alt="Visit Site"/></a>
                             <p>{post.frontmatter.date}</p>
                   </div>       
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Read More →
                  </Link>
                </p>

                          </div>   

              
                 

            </div>
                  
            

              </div>
        </FadeIn>

            ))}
        </div>  
      </section>
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
            repo
            templateKey
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`
