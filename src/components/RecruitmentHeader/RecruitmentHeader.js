import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { mq } from "../../utils/styles"
import Container from "../Shared/Container"
import SectionTitle from "../Shared/SectionTitle"
import { benefits } from "../../data/data"
import { graphql, useStaticQuery } from "gatsby"

const Root = styled.div`
  background-color: #e1e2e1;
  position: relative;
  display: flex;
  padding: 5rem 0;

  @media (min-width: ${mq.m768}) {
    background-image: linear-gradient(to right, #e1e2e1 70%, #f8f6f6 0);
    padding: 3rem 0;
  }

  @media (min-width: ${mq.m1024}) {
    padding: 6rem 0;
  }

  @media (min-width: ${mq.m1680}) {
    padding: 10rem 0;
  }
`

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1rem;

  @media (min-width: ${mq.m768}) {
    padding: 0 2rem;
  }

  @media (min-width: ${mq.m1024}) {
    padding: 0 3rem;
    grid-template-columns: 1fr 1fr;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Subtitle = styled.h4`
  margin: 0;
  font-weight: 400;
  color: var(--dark-text);
  font-size: 2rem;

  span {
    font-weight: 600;
    color: var(--pink-theme);
  }

  @media (min-width: ${mq.m768}) {
    font-size: 1.75rem;
  }
  @media (min-width: ${mq.m1280}) {
    font-size: 2rem;
  }
`

const BenefitsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  margin-top: 3rem;
  grid-gap: 2rem;
  z-index: 1;
`

const BenefitTextContainer = styled.div``

const BenefitTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`

const BenefitDescription = styled.p`
  margin: 0;
  line-height: 2;
`

const ImgContainer = styled.div`
  display: none;

  @media (min-width: ${mq.m1024}) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 0;
    display: initial;
    max-width: 55vw;
    right: -10%;
  }

  @media (min-width: ${mq.m1280}) {
    right: -1%;
    max-width: 45vw;
  }

  @media (min-width: ${mq.m1680}) {
    max-width: 800px;
  }
`

const RecruitmentHeader = () => {
  const { recruitmentHeader } = useStaticQuery(RECRUITMENT_HEADER_QUERY)
  return (
    <Root>
      <StyledContainer>
        <TextContainer>
          <SectionTitle text="careers" />
          <Subtitle>
            join <span>branch</span> & benefit from success
          </Subtitle>
          <BenefitsContainer>
            {benefits.map(benefit => {
              return (
                <BenefitTextContainer key={benefit.title}>
                  <BenefitTitle>{benefit.title}</BenefitTitle>
                  <BenefitDescription>{benefit.description}</BenefitDescription>
                </BenefitTextContainer>
              )
            })}
          </BenefitsContainer>
        </TextContainer>
      </StyledContainer>
      <ImgContainer>
        <Img fluid={recruitmentHeader.childImageSharp.fluid} />
      </ImgContainer>
    </Root>
  )
}

export default RecruitmentHeader

export const RECRUITMENT_HEADER_QUERY = graphql`
  query ReccruitmentHeaderQuery {
    recruitmentHeader: file(relativePath: { eq: "recruitment-header.png" }) {
      childImageSharp {
        fluid(
          quality: 100
          traceSVG: { background: "#fff", color: "#eb2980" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
