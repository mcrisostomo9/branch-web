import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../Shared/Logo"
import Container from "../Shared/Container"

const Nav = styled(Container)`
  position: relative;
`

const HomeLink = styled.div`
  a {
    color: var(--pink-theme);
  }
`

const StyledLogo = styled(Logo)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Header = () => {
  return (
    <Nav as="nav">
      <HomeLink>
        « I’m not ready, <Link to="/">back to branch.com</Link>
      </HomeLink>
      <StyledLogo isBlack />
    </Nav>
  )
}

export default Header
