import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import Container from "../Shared/Container"
import Branch from "./Branch"
import { mq } from "../../utils/styles"
import { branches } from "../../data/data"
import { useWindowSize } from "../../utils/hooks"

const Root = styled(Container)``

const FirstLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const BranchesContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin: auto;

  @media (min-width: ${mq.m768}) {
    padding: 0;

    // for slides spacing
    .carousel__inner-slide {
      padding: 0 1.25rem;
    }
  }

  @media (min-width: ${mq.m1024}) {
    width: 90%;
  }

  @media (min-width: ${mq.m1440}) {
    padding-left: 4rem;
  }

  @media (min-width: ${mq.m1680}) {
    padding-left: 1rem;
    max-width: var(--max-width);
    width: 100%;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  .btn-back,
  .btn-next {
    background: transparent;
    border: 1px solid #1f252e;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #1f252e;
      height: 80%;
      width: 80%;
    }
  }

  .btn-next {
    margin-left: 1rem;
  }
`

const CurrentBranches = () => {
  const { ripple, placeholder } = useStaticQuery(BRANCH_QUERY)
  const { width } = useWindowSize()
  const slidesVisible = width < 1280 ? 1 : 1.6
  const aspectRatio =
    width < 768 ? { height: 100, width: 60 } : { height: 50, width: 100 }
  return (
    <>
      <CarouselProvider
        naturalSlideHeight={aspectRatio.height}
        naturalSlideWidth={aspectRatio.width}
        totalSlides={branches.length}
        visibleSlides={slidesVisible}
      >
        <Root>
          <FirstLineContainer>
            <TextContainer>
              <SectionTitle
                text="current branches"
                color="var(--light-theme)"
              />
              <SectionSubtitle
                color="var(--light-theme)"
                text="some of our most recent partnerships"
              />
            </TextContainer>
            <ButtonContainer>
              <ButtonBack className="btn-back">
                <FaAngleLeft />
              </ButtonBack>
              <ButtonNext className="btn-next">
                <FaAngleRight />
              </ButtonNext>
            </ButtonContainer>
          </FirstLineContainer>
        </Root>
        <BranchesContainer>
          <Slider>
            {branches.map((branch, index) => (
              <Slide
                className="slideContainer"
                index={index}
                key={branch.branchName}
              >
                <Branch
                  branch={ripple}
                  placeholder={branch.partnerImg}
                  mainImg={ripple}
                  branchName={branch.branchName}
                  tagline={branch.tagline}
                  label={branch.label}
                  partnerName={branch.partnerName}
                  position={branch.position}
                  partnerImg={placeholder}
                />
              </Slide>
            ))}
          </Slider>
        </BranchesContainer>
      </CarouselProvider>
    </>
  )
}

export default CurrentBranches

export const BRANCH_QUERY = graphql`
  query BranchQuery {
    ripple: file(relativePath: { eq: "ripple.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    placeholder: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
