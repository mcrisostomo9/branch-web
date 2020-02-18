import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../../images/logo.svg"

const Wrapper = styled.header`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  width: 100%;
  max-width: var(--max-width);
`

const Navbar = ({ siteTitle }) => (
  <Wrapper>
    <img src={logo} alt="branch logo" />
  </Wrapper>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
