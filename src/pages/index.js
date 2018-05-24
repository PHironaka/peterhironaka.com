import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import externalLink from '../img/external-link.svg'
import FadeIn from 'react-fade-in';


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (

          <FadeIn>  

      <section className="section-home">
        <div className="container two">
            <h2> Hello 👋🏼, my name is Peter Hironaka. I’m a Freelance Web Developer based in sunny Los Angeles, California. Here are a few things I’ve been working on:</h2>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'project-post')
            .map(({ node: post }) => (
              <div
                className="content-post"
                style={{ border: '1px solid #eaecee', padding: '2em 2em' }}
                key={post.id}
              >
                 <div
                className="index-content">

                <h3>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}

                  </Link>
                  
                </h3>
            <a className="post-content--external-link" href={post.frontmatter.repo} target="_blank"><img src={externalLink} name="Visit Site" /></a>
                             <p>{post.frontmatter.date}</p>

            </div>
            <img src={post.frontmatter.image} name={post.frontmatter.title} />
                  
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Read More →
                  </Link>
                </p>

              </div>
            ))}
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
    allMarkdownRemark(limit: 7 sort: { order: DESC, fields: [frontmatter___date] }
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
            repo
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
