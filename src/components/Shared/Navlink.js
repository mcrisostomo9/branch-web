import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: var(--pink-theme);
  }
`

const Navlink = ({ to, text, className }) => (
  <StyledLink to={to} className={className}>
    {text}
  </StyledLink>
)

export default Navlink
