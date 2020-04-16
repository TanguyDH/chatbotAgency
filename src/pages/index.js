import React from "react"
import Layout from "../components/layout/layout"
import Services from '../components/services/services'
import SEO from "../components/seo"
import Main from "../components/main/main"
import Engagement from '../components/engagement/engagement'
import './index.scss';
import Stategy from '../components/strategy/strategy';
import Contact from '../components/contact/contact';
import CaseStudies from '../components/casestudies/casestudies';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />
    <Services />
    <Engagement />
    <CaseStudies />
    <Stategy />
    <Contact />
  </Layout>
)

export default IndexPage
