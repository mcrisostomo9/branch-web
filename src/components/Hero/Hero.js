import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import { backgroundGatsbyImage, mq } from "../../utils/styles"

const Root = styled.div`
  position: relative;
  padding: 3rem 1rem;

  @media (min-width: ${mq.m768}) {
    padding: 3rem 2rem;
  }
  @media (min-width: ${mq.m1024}) {
    padding: 3rem;
  }
  @media (min-width: ${mq.m1280}) {
  }
  @media (min-width: ${mq.m1440}) {
  }
`

const HeroText = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  z-index: 1;
  padding: 3rem 0;

  @media (min-width: ${mq.m768}) {
    padding: 3rem 0;
  }

  @media (min-width: ${mq.m1024}) {
    padding: 5rem 0;
  }

  @media (min-width: ${mq.m1440}) {
    padding: 8rem 0;
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
      font-size: 5rem;
    }
    @media (min-width: ${mq.m1280}) {
      font-size: 5.5rem;
    }
    @media (min-width: ${mq.m1440}) {
      font-size: 7.5rem;
    }
  }
`

const Hero = () => {
  const { hero } = useStaticQuery(HERO_QUERY)
  return (
    <Root>
      <Navbar />
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
        <h2>with disruptive ceos</h2>
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
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
