import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { backgroundGatsbyImage, mq } from "../../utils/styles"
import Container from "../Shared/Container"

const Root = styled.div`
  position: relative;
`

const HeroText = styled(Container)`
  position: relative;
  z-index: 1;
  padding-top: 8rem;

  @media (min-width: ${mq.m768}) {
    padding-top: 8rem;
  }

  @media (min-width: ${mq.m1024}) {
    padding-top: 12rem;
    padding-bottom: 5rem;
  }

  @media (min-width: ${mq.m1440}) {
    padding-bottom: 8rem;
  }

  h2 {
    font-weight: 400;
    color: #fff;
    margin: 0;
    font-size: 1.5rem;

    @media (min-width: ${mq.m768}) {
      font-size: 1.75rem;
    }
    @media (min-width: ${mq.m1024}) {
      font-size: 2rem;
    }
    @media (min-width: ${mq.m1280}) {
      font-size: 2.25rem;
    }
    @media (min-width: ${mq.m1440}) {
      font-size: 2.5rem;
    }
  }

  h1 {
    font-weight: 700;
    margin: 0;
    background: -webkit-linear-gradient(#ee4075, #fbb73c);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 3rem;
    line-height: 1;

    @media (min-width: ${mq.m768}) {
      font-size: 3.5rem;
    }
    @media (min-width: ${mq.m1024}) {
      font-size: 4.5rem;
    }
    @media (min-width: ${mq.m1280}) {
      font-size: 5rem;
    }
    @media (min-width: ${mq.m1440}) {
      font-size: 6rem;
    }
  }
`

const Hero = () => {
  const { hero } = useStaticQuery(HERO_QUERY)
  return (
    <Root>
      <Img fluid={hero.childImageSharp.fluid} style={backgroundGatsbyImage} />
      <HeroText>
        <h2>we build and launch</h2>
        <h1>
          game
          <br />
          changing
          <br />
          businesses
        </h1>
        <h2>with fearless ceos</h2>
      </HeroText>
    </Root>
  )
}

export default Hero

export const HERO_QUERY = graphql`
  query HeroQuery {
    hero: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
