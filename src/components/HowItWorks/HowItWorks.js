import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { mq } from "../../utils/styles"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import Container from "../Shared/Container"

const Root = styled(Container)``

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledImg = styled(Img)`
  margin-top: 3rem;
`

const HowItWorks = () => {
  const { howImg } = useStaticQuery(HOW_IT_WORKS_QUERY)
  return (
    <Root>
      <TextContainer>
        <SectionTitle text="how it works" color="var(--light-theme)" />
        <SectionSubtitle
          color="var(--light-theme)"
          text="our process is unique, tried and tested!"
        />
      </TextContainer>
      <StyledImg fluid={howImg.childImageSharp.fluid} />
    </Root>
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
