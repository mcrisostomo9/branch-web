import React, { useContext } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Shared/layout"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { Context } from "../context/Context"
import CurrentBranchesProjects from "../components/CurrentBranches/CurrentBranchesProjects"
import ApplyToBranch from "../components/ApplyToBranch/ApplyToBranch"

const StyledLayout = styled(Layout)`
  position: relative;
`

const CompaniesPage = props => {
  const { isBranchOpen } = useContext(Context)
  const { allSanityBranch } = props.data
  return (
    <StyledLayout isBranchOpen={isBranchOpen}>
      <SEO title="Projects" />
      <Navbar />
      <CurrentBranchesProjects branches={allSanityBranch} />
      <ApplyToBranch />
      <Newsletter />
      <Footer />
    </StyledLayout>
  )
}

export default CompaniesPage

export const COMPANIES_QUERY = graphql`
  query companiesQuery {
    allSanityBranch {
      edges {
        node {
          _id
          branchName
          url
          logo {
            asset {
              url
            }
          }
          color {
            hex
          }
          previewImg {
            asset {
              fluid {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          mainImg {
            asset {
              fluid {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          tagline
          description
          bulletPoints
          partners {
            partnerLabel
            partnerName
            partnerPosition
            partnerImg {
              asset {
                fluid {
                  ...GatsbySanityImageFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
