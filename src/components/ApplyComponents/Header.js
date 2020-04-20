import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../Shared/Logo"
import Container from "../Shared/Container"
import { mq } from "../../utils/styles"

const Nav = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
`

const HomeLink = styled.div`
  order: 2;
  text-align: center;
  margin-top: 1rem;
  a {
    color: var(--pink-theme);
  }

  @media (min-width: ${mq.m768}) {
    text-align: left;
    margin-top: 0rem;
  }
`

const StyledLogo = styled(Logo)`
  order: 1;
  align-self: center;

  @media (min-width: ${mq.m768}) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
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
