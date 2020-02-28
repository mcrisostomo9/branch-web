import React, { useContext } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import What from "../components/What/What"
import CurrentBranches from "../components/CurrentBranches/CurrentBranches"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import Newsletter from "../components/Newsletter/Newsletter"
import Recruitment from "../components/Recruitment/Recruitment"
import Community from "../components/Community/Community"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { BranchContext } from "../context/BranchContext"
import { graphql } from "gatsby"

const StyledLayout = styled(Layout)`
  position: relative;
`

const IndexPage = props => {
  const { isBranchOpen } = useContext(BranchContext)
  const { allSanityBranch } = props.data
  return (
    <StyledLayout isBranchOpen={isBranchOpen}>
      <SEO title="Home" />
      <Navbar />
      <Hero />
      <What />
      <CurrentBranches branches={allSanityBranch} />
      <HowItWorks />
      <Newsletter />
      <Recruitment />
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

export default IndexPage

export const INDEX_QUERY = graphql`
  query indexQuery {
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
