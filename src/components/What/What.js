import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import SectionTitle from "../Shared/SectionTitle"
import { mq } from "../../utils/styles"
import SectionSubtitle from "../Shared/SectionSubtitle"

const Root = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 3rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (min-width: ${mq.m768}) {
    padding: 3rem 0rem;
  }
  @media (min-width: ${mq.m1024}) {
    grid-template-columns: 5fr 4fr;
    padding: 3rem 0rem;
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
  return (
    <Root>
      <TextContainer>
        <SectionTitle color="var(--dark-theme)" text="what is branch?" />
        <SectionSubtitle
          color="var(--dark-theme)"
          text="branch is a Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. "
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
