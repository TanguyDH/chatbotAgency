import React from 'react';
import CasestudiesItem from './casestudiesItem/casestudiesItem'
import { graphql, useStaticQuery } from "gatsby"
import './casestudies.scss';
const casestudies = () =>  {

    const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                path
                subject
                image {
                  publicURL
                }
              }
            }
          }
        }
      }
    `)
    
    return (
      <div className="caseStudies">
        <h3>Case Sutdies</h3>
            <div className="caseStudies__list">
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <CasestudiesItem
                path={edge.node.frontmatter.path}
                title={edge.node.frontmatter.title}
                img={edge.node.frontmatter.image.publicURL}
                subject={edge.node.frontmatter.subject}
              />
            )
          })}
        </div>
      </div>
    )
}

export default casestudies