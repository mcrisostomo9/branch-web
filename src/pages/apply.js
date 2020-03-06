import React from "react"
import Layout from "../components/Shared/layout"
import SEO from "../components/seo"
import Header from "../components/ApplyComponents/Header"
import Application from "../components/ApplyComponents/Application"

const ApplyPage = () => {
  return (
    <Layout>
      <SEO title="Apply" />
      <Header />
      <Application />
    </Layout>
  )
}

export default ApplyPage
