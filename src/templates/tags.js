import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../components/Layout'
import styled from "styled-components"

const TagList = styled.ul`
   list-style: none;
    margin-bottom: 0;
    display: inline-flex;
    padding: 0 2em;

    li {
      margin: 1em 1em 1em 0;
      a {
        border: 1px solid #eee;
        padding: 8px 15px;
      }
    }

`


class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          {post.node.frontmatter.title}

        </Link>
          <p>{post.excerpt}</p>

      </li>


    ))
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
    <Layout>

      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
            <div>
              <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
              <TagList>
                {postLinks}
              </TagList>
              <p>
                <Link to="/tags/">Browse all tags</Link>
              </p>
            </div>
      </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
