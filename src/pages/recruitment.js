import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import RecruitmentHeader from "../components/RecruitmentHeader/RecruitmentHeader"
import TalentPool from "../components/TalentPool/TalentPool"
import BranchBenefits from "../components/BranchBenefits/BranchBenefits"

const RecruitmentPage = props => {
  return (
    <Layout>
      <SEO title="Recruitment" />
      <Navbar />
      <RecruitmentHeader />
      <TalentPool />
      <BranchBenefits />
      <Footer />
    </Layout>
  )
}

export default RecruitmentPage
