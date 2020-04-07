import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import SectionTitle from "../Shared/SectionTitle"
import { mq } from "../../utils/styles"
import SectionSubtitle from "../Shared/SectionSubtitle"
import Container from "../Shared/Container"
import { useInView } from "react-intersection-observer"

const Root = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (min-width: ${mq.m768}) {
  }
  @media (min-width: ${mq.m1024}) {
    grid-template-columns: 5fr 4fr;
  }
  @media (min-width: ${mq.m1280}) {
  }
  @media (min-width: ${mq.m1440}) {
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const What = () => {
  const { whatImg } = useStaticQuery(WHAT_QUERY)
  const [ref, inView, entry] = useInView({
    rootMargin: "-50% 0px",
  })
  // console.log(inView)
  // console.log(entry)
  return (
    <Root ref={ref} id="what-is-branch">
      <TextContainer>
        <SectionTitle color="var(--dark-theme)" text="what is branch?" />
        <SectionSubtitle
          color="var(--dark-theme)"
          style="margin-top:10px;"
          text="We work with Fearless CEO’s that understand their industry and identify a business opportunity. 
          They face a challenge to capitalize due to time, skill-set, and urgency. At Branch, our process is to 
          deploy a full-time operator who takes charge to go through our 3-phased, 12-month system & leverage our 
          studio’s infrastructure. These individuals who see an opportunity obtain a real partner to build revenue-generating 
          businesses quickly, while reducing risk, costs, & maintaining momentum. "
        />
      </TextContainer>
      <Img fluid={whatImg.childImageSharp.fluid} />
    </Root>
  )
}

export default What

export const WHAT_QUERY = graphql`
  query WhatQuery {
    whatImg: file(relativePath: { eq: "what-image.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
