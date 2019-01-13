import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import FadeIn from 'react-fade-in';
import Layout from '../components/Layout'
import styled from "styled-components"

const BlogPost = styled.div` 
    margin: 2em 0;
`

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
          <FadeIn>  

      <section className="section-home">
          
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .map(({ node: post }) => (
              <BlogPost>
             <Link className="has-text-primary" to={post.fields.slug}>

              <div
                className="blog-content"
                
                key={post.id}
              >
                <h3>
                    {post.frontmatter.title}
                </h3>
                                  <small>{post.frontmatter.date}</small>

                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
                                </Link>

                                </BlogPost>
            ))}
      </section>
      </FadeIn>  

      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
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
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
