import React, { useContext } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import Newsletter from "../components/Newsletter/Newsletter"
import Recruitment from "../components/Recruitment/Recruitment"
import Community from "../components/Community/Community"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { BranchContext } from "../context/BranchContext"
import CurrentBranchesProjects from "../components/CurrentBranches/CurrentBranchesProjects"

const StyledLayout = styled(Layout)`
  position: relative;
`

const ProjectsPage = props => {
  const { isBranchOpen } = useContext(BranchContext)
  const { allSanityBranch } = props.data
  return (
    <StyledLayout isBranchOpen={isBranchOpen}>
      <SEO title="Projects" />
      <Navbar />
      <CurrentBranchesProjects branches={allSanityBranch} />
      <Newsletter />
      <Community />
      <Footer />
      {/*<AnimatePresence>*/}
      {/*  {isBranchOpen && (*/}
      {/*    <BranchFull*/}
      {/*      branch={branches[0]}*/}
      {/*      logo={logo}*/}
      {/*      mainImg={branchRipple}*/}
      {/*      partners={placeholder}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*</AnimatePresence>*/}
    </StyledLayout>
  )
}

export default ProjectsPage

export const PROJECTS_QUERY = graphql`
  query projectsQuery {
    allSanityBranch {
      edges {
        node {
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
                ...GatsbySanityImageFluid
              }
            }
          }
          mainImg {
            asset {
              fluid {
                ...GatsbySanityImageFluid
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
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
