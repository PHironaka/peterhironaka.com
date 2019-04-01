import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'
import styled from "styled-components"

const TagList = styled.ul`
   list-style: none;
    margin-bottom: 0;
    display: block;
    padding: 0 2em;

    li {
      margin: 1em 1em 1em 0;
      display: inline-block;


      a {
        border: 1px solid #000;
        padding: 8px 15px;
        border-radius:10px;
      }
    }

`

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>

  <section className="section">

    <Helmet title={`Tags | ${title}`} />
      <div >
        <div>
          <TagList>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </TagList>
        </div>
      </div>

  </section>
  </Layout>

)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
