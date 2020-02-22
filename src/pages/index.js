import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import What from "../components/What/What"
import CurrentBranches from "../components/CurrentBranches/CurrentBranches"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import Newsletter from "../components/Newsletter/Newsletter"
import Recruitment from "../components/Recruitment/Recruitment"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <What />
    <CurrentBranches />
    <HowItWorks />
    <Newsletter />
    <Recruitment />
  </Layout>
)

export default IndexPage
