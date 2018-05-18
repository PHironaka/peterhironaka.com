import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import externalLink from '../img/external-link.svg'

export default class ProjectPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">

          {posts
            .filter(post => post.node.frontmatter.templateKey === 'project-post')
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >

               <div
                className="post-content--title">

                <h2>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}

                  </Link>
                  
                </h2>
            <a className="post-content--external-link" href={post.frontmatter.repo} target="_blank"><img src={externalLink}/></a>
            </div>
                  <small>{post.frontmatter.date}</small>

            <img src={post.frontmatter.image}/>

                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
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
          excerpt(pruneLength: 400)
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
