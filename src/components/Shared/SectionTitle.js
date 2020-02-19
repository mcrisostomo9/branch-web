import React from "react"
import styled from "styled-components"
import { mq } from "../../utils/styles"

const Root = styled.h3`
  color: ${props => props.color && props.color};
  margin: 0;
  font-size: 2.5rem;

  @media (min-width: ${mq.m768}) {
    font-size: 2.5rem;
  }
  @media (min-width: ${mq.m1024}) {
    font-size: 3.5rem;
  }
  @media (min-width: ${mq.m1280}) {
    font-size: 4rem;
  }
  @media (min-width: ${mq.m1440}) {
    font-size: 4.5rem;
  }
`

const SectionTitle = ({ color, text }) => {
  return <Root color={color}>{text}</Root>
}

export default SectionTitle
