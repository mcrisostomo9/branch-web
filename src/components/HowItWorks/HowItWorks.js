import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Container from "../Shared/Container"
import SectionHeader from "../Shared/SectionHeader"

const StyledImg = styled(Img)`
  margin-top: 3rem;
`

const HowItWorks = () => {
  const { howImg } = useStaticQuery(HOW_IT_WORKS_QUERY)
  return (
    <Container id="how-it-works">
      <SectionHeader
        title="how it works"
        subtitle="our process is unique, tried and tested!"
        color="var(--light-theme)"
      />
      <StyledImg fluid={howImg.childImageSharp.fluid} />
    </Container>
  )
}

export default HowItWorks

export const HOW_IT_WORKS_QUERY = graphql`
  query HowItWorksQuery {
    howImg: file(relativePath: { eq: "how-it-works.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
