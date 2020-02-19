import React from "react"
import styled from "styled-components"
import { mq } from "../../utils/styles"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import Container from "../Shared/Container"

const Root = styled(Container)``

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
