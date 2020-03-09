import React, { useContext } from "react"
import styled from "styled-components"
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
import BranchFull from "../BranchFull/BranchFull"
import { mq } from "../../utils/styles"
import { useMeasure } from "../../utils/hooks"
import { Context } from "../../context/Context"
import { AnimatePresence } from "framer-motion"
import AngleIcon from "../Shared/AngleIcon"

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

const CurrentBranches = ({ branches }) => {
  const [bind, { width }] = useMeasure()
  const visibleSlides = width > 768 ? 1.6 : 1
  const aspectRatio =
    width > 768 ? { height: 50, width: 100 } : { height: 100, width: 60 }
  const { isBranchOpen, viewedBranch, dispatch } = useContext(Context)
  return (
    <>
      <CarouselProvider
        naturalSlideHeight={aspectRatio.height}
        naturalSlideWidth={aspectRatio.width}
        totalSlides={branches.edges.length}
        visibleSlides={visibleSlides}
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
                <AngleIcon direction="left" />
              </ButtonBack>
              <ButtonNext className="btn-next">
                <AngleIcon direction="right" />
              </ButtonNext>
            </ButtonContainer>
          </FirstLineContainer>
        </Root>
        <BranchesContainer {...bind}>
          <Slider>
            {branches.edges.map((branch, index) => (
              <Slide
                className="slideContainer"
                index={index}
                key={branch.node._id}
              >
                <Branch branch={branch.node} isBranchOpen={isBranchOpen} />
              </Slide>
            ))}
          </Slider>
        </BranchesContainer>
      </CarouselProvider>
      <AnimatePresence>
        {isBranchOpen && (
          <BranchFull
            branch={viewedBranch}
            isBranchOpen={isBranchOpen}
            dispatch={dispatch}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default CurrentBranches
