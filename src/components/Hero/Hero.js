import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Img from "gatsby-image"
import styled from "styled-components"
import { backgroundGatsbyImage, mq } from "../../utils/styles"
import Container from "../Shared/Container"
import AngleIcon from "../Shared/AngleIcon"

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
    padding-bottom: 0;
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

const DownArrowButton = styled.button`
  background: transparent;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  border: 2px solid #fff;
  display: flex;
  justify-items: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  svg {
    position: absolute;
    color: #fff;
    height: 25px;
    width: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :hover {
    background: #fff;

    svg {
      color: #000;
    }
  }
`

const Hero = () => {
  const { hero } = useStaticQuery(HERO_QUERY)
  return (
    <Root>
      <Img fluid={hero.childImageSharp.fluid} style={backgroundGatsbyImage} />
      <HeroText>
        <h2>we materialize opportunities into</h2>
        <h1>
          revenue
          <br />
          generating
          <br />
          businesses
        </h1>
        <h2>with fearless ceos</h2>
      </HeroText>
      <Container>
        <DownArrowButton onClick={() => scrollTo("#what-is-branch")}>
          <AngleIcon direction="down" />
        </DownArrowButton>
      </Container>
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
