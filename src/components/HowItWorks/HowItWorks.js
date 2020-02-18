import React from "react"
import styled from "styled-components"
import { mq } from "../../utils/styles"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"

const Root = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: ${mq.m768}) {
    padding: 3rem 0;
  }
  @media (min-width: ${mq.m1024}) {
    padding: 3rem 0;
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

const HowItWorks = () => {
  return (
    <Root>
      <TextContainer>
        <SectionTitle text="how it works" color="var(--light-theme)" />
        <SectionSubtitle
          color="var(--light-theme)"
          text="our process is unique, tried and tested!"
        />
      </TextContainer>
    </Root>
  )
}

export default HowItWorks
