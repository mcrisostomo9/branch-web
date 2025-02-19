import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import logoBlack from "../../images/logo-black.svg"
import { mq } from "../../utils/styles"

const LogoLink = styled(Link)`
  img {
    width: 100%;
    max-width: 150px;

    @media (min-width: ${mq.m768}) {
      max-width: 175px;
    }

    @media (min-width: ${mq.m1024}) {
      max-width: 200px;
    }
  }
`

const Logo = ({ className, isBlack }) => (
  <LogoLink to="/" className={className}>
    <img src={isBlack ? logoBlack : logo} alt="branch logo" />
  </LogoLink>
)

export default Logo
