import React from "react"
import styled from "styled-components"
import { mq } from "../../utils/styles"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import Container from "../Shared/Container"

const Root = styled(Container)``

const FirstLineContainer = styled.div`
  display: flex;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CurrentBranches = () => {
  return (
    <Root>
      <FirstLineContainer>
        <TextContainer>
          <SectionTitle text="current branches" color="var(--light-theme)" />
          <SectionSubtitle
            color="var(--light-theme)"
            text="some of our most recent partnerships"
          />
        </TextContainer>
      </FirstLineContainer>
    </Root>
  )
}

export default CurrentBranches
