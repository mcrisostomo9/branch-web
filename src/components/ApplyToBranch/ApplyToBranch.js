import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Container from "../Shared/Container"
import { mq } from "../../utils/styles"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../Button/Button"

const InnerContainer = styled.div`
  border-radius: 5px;
  background: #fff;
  grid-template-columns: 1fr;

  @media (min-width: ${mq.m768}) {
    display: grid;
    grid-template-columns: 5fr 4fr;
  }
`

const TextContainer = styled.div`
  padding: 3rem 1rem 3rem 4rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  @media (min-width: ${mq.m768}) {
    align-items: flex-start;
    text-align: left;

    button {
      max-width: 230px;
    }
  }
`

const Title = styled.h3`
  margin: 0;

  span {
    color: var(--pink-theme);
  }

  font-size: 2rem;

  @media (min-width: ${mq.m768}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${mq.m1280}) {
    font-size: 3.25rem;
  }

  @media (min-width: ${mq.m1440}) {
    font-size: 4rem;
  }
`

const Subtitle = styled.p`
  line-height: 1.5;
  color: var(--dark-text);
  font-size: 1rem;

  @media (min-width: ${mq.m1024}) {
    font-size: 1.25rem;
  }
`

const StyledImg = styled(Img)`
  display: none;

  @media (min-width: ${mq.m768}) {
    display: initial;
  }
`

const ApplyToBranch = () => {
  const { laptopImg } = useStaticQuery(LAPTOP_QUERY)
  return (
    <Container>
      <InnerContainer>
        <TextContainer>
          <Title>
            apply to <span>branch</span>
          </Title>
          <Subtitle>
            been thinking of that new company? <br />
            send it in and let's review it together
          </Subtitle>
          <Button text="apply to join" />
        </TextContainer>
        <StyledImg
          fluid={laptopImg.childImageSharp.fluid}
          imgStyle={{ objectPosition: "left", borderRadius: "5px" }}
        />
      </InnerContainer>
    </Container>
  )
}

export default ApplyToBranch

export const LAPTOP_QUERY = graphql`
  query LaptopQuery {
    laptopImg: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
