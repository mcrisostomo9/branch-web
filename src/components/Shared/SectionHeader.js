import React from "react"
import styled from "styled-components"
import SectionTitle from "./SectionTitle"
import SectionSubtitle from "./SectionSubtitle"

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionHeader = ({ title, subtitle, color }) => {
  return (
    <TextContainer>
      <SectionTitle text={title} color={color} />
      <SectionSubtitle color={color} text={subtitle} />
    </TextContainer>
  )
}

export default SectionHeader
