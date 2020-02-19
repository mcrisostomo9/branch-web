import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../images/logo.svg"
import { mq } from "../../utils/styles"
import Container from "../Shared/Container"

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

const LogoLink = styled(Link)``

const Logo = styled.img`
  width: 100%;
  max-width: 150px;
  height: 100%;

  @media (min-width: ${mq.m768}) {
    max-width: 175px;
  }

  @media (min-width: ${mq.m1024}) {
    max-width: 200px;
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

const StyledLink = styled(Link)`
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: var(--pink-theme);
  }
`

const Button = styled.button`
  background: var(--pink-theme);
  border: 1px solid transparent;
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
    border: 1px solid var(--pink-theme);
    a {
      color: var(--pink-theme);
    }
  }
`

const Navbar = () => (
  <Wrapper>
    <InnerContainer as="nav">
      <LogoLink to="/">
        <Logo src={logo} alt="branch logo" />
      </LogoLink>
      <LinkContainer>
        <li>
          <StyledLink to="/">home</StyledLink>
        </li>
        <li>
          <StyledLink to="/page-2">recruitment</StyledLink>
        </li>
        <li>
          <StyledLink to="/">projects</StyledLink>
        </li>
        <li>
          <StyledLink to="/">how it works</StyledLink>
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
