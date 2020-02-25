import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Root = styled(Link)`
  color: ${props => props.color && props.color};
  text-decoration: none;
  font-weight: 600;

  :hover {
    text-decoration: underline;
  }
`

const StyledLink = ({ color, text, to, className }) => {
  return (
    <Root to={to} color={color} className={className}>
      {text} ›
    </Root>
  )
}

export default StyledLink
