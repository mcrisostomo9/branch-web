import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { mq } from "../../utils/styles"
import Container from "../Shared/Container"
import Logo from "../Shared/Logo"
import Navlink from "../Shared/Navlink"

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const InnerContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

const LinkContainer = styled.ul`
  list-style: none;
  display: none;
  align-items: center;

  li {
    margin-left: 2rem;
  }

  @media (min-width: ${mq.m1024}) {
    display: flex;
  }
`

const Button = styled.button`
  background: var(--pink-theme);
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 1rem 1.75rem;
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }

  :hover {
    background: #fff;
    border: 2px solid var(--pink-theme);
    a {
      color: var(--pink-theme);
    }
  }
`

const Navbar = () => (
  <Wrapper>
    <InnerContainer as="nav">
      <Logo />
      <LinkContainer>
        <li>
          <Navlink to="/" text="home" />
        </li>
        <li>
          <Navlink to="/page-2" text="recruitment" />
        </li>
        <li>
          <Navlink to="/page-2" text="projects" />
        </li>
        <li>
          <Navlink to="/page-2" text="how it works" />
        </li>
        <li>
          <Button>
            <Link to="/apply">apply now</Link>
          </Button>
        </li>
      </LinkContainer>
      {/*TODO revisit mobile container*/}
      {/*<MobileContainer />*/}
    </InnerContainer>
  </Wrapper>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
