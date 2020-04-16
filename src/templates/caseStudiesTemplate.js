import React from "react"
import Layout from '../components/layout/layout';
import { graphql } from "gatsby"
import styleCaseStudies from './caseStudiesTemplate.module.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className={styleCaseStudies.caseStudies}>
        <div>
          <h2 className={styleCaseStudies.mainTitle}>{frontmatter.title}</h2>
          <div
            className={styleCaseStudies.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
