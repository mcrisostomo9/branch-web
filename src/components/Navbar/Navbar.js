import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"
import { mq } from "../../utils/styles"
import Logo from "../Shared/Logo"
import Navlink from "../Shared/Navlink"

const Wrapper = styled.header`
  ${props =>
    props.transparent
      ? " position: absolute; top: 0;  left: 0;  right: 0;  z-index: 10;"
      : "background: #0d151e"};
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 1rem;

  @media (min-width: ${mq.m768}) {
    padding: 1rem 2rem;
  }

  @media (min-width: ${mq.m1024}) {
    padding: 1rem 3rem;
    width: 90%;
  }

  @media (min-width: ${mq.m1680}) {
    width: 100%;
  }
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

const ApplyLink = styled(Link)`
  background: var(--pink-theme);
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 1rem 1.75rem;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  font-weight: 600;

  :hover {
    background: #fff;
    border: 2px solid var(--pink-theme);
    color: var(--pink-theme);
  }
`

const HowItWorksLink = styled.a`
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: var(--pink-theme);
  }
`

const Navbar = ({ className, transparent }) => (
  <Wrapper className={className} transparent={transparent}>
    <InnerContainer as="nav">
      <Logo />
      <LinkContainer>
        <li>
          <Navlink to="/" text="home" />
        </li>
        <li>
          <Navlink to="/careers" text="careers" />
        </li>
        <li>
          <Navlink to="/companies" text="companies" />
        </li>
        <li>
          <Navlink to="/#how-it-works" text="how it works" />
        </li>
        <li>
          <ApplyLink to="/apply">apply now</ApplyLink>
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
