import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import github from '../img/github-icon.svg'
import ProjectLinks from '../components/ProjectLinks'
import externalLink from '../img/external-link.svg'
import FadeIn from 'react-fade-in';
import Layout from '../components/Layout'
import styled from "styled-components"

const HyperLink = styled.ul`
      display:grid;
      grid-template-columns: 90px 120px ;
      list-style:none;

      @media screen and (max-width: 800px) {
        grid-gap:1em;
    }

    li {
     

      a {
        border:1px solid #eee;
      margin-right: 1em;
      text-align:center;
      padding:7px;
      transition: all .2s;
      color:black;
      background:white;
      display: block;

      &:hover {
      color:white;
      background:black;

      }
      }

    }
`
const TagList = styled.ul`
   list-style: none;
    margin-bottom: 0;
    display: inline-flex;

    li {
      margin: 1em 1em 1em 0;
      a {
        border: 1px solid #eee;
        padding: 8px 15px;
      }
    }

`

export const ProjectPostTemplate = ({
  content,
  contentComponent,
  description,
  repo,
  image,
  project,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
          <FadeIn>  

    <section className="section">
      {helmet || ''}
          <div className="project-content ">
            <h2 className="title">
              {title}
            </h2>
            <HyperLink>
            <li>
            <a href={repo} target="_blank" rel="noopener noreferrer"> Repo</a>
            </li>
             <li>
            <a href={project} target="_blank" rel="noopener noreferrer"> Visit Site </a>
            </li>
            </HyperLink>
          <div className="project-content--items ">

            <div className="project-content--copy">

            <PostContent content={content} />
          </div>

            <div className="project-content--image">
           <img src={image} alt={title} name={title} />

        </div>
        </div>
             <ProjectLinks
          previous={PostContent.previous}
          next={PostContent.next}
        />


{tags && tags.length ? (
              <TagList>
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}> {tag}</Link>
                    </li>
                  ))}
                </TagList>

            ) : null}
          </div>
       </section>
     </FadeIn>  

  )
}

ProjectPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  image: PropTypes.string,
  repo: PropTypes.string,
  project: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>

    <ProjectPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      repo={post.frontmatter.repo}
      image= {post.frontmatter.image}
      project={post.frontmatter.project}
      helmet={<Helmet title={`${post.frontmatter.title} | Project`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
    </Layout>

  )
}

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectPost

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        project
        image
        repo
        tags
      }
    }
  }
`