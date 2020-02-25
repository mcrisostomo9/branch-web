import React from "react"
import styled from "styled-components"
import {
  FaAngellist,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
import cbIcon from "../../images/cb-icon.svg"

const Root = styled.a`
  color: #fff;

  svg,
  img {
    width: 20px;
    height: auto;
  }
`

const SocialIcon = ({ social, className, link }) => {
  const renderSocial = social => {
    switch (social) {
      case "facebook":
        return <FaFacebookF />
      case "twitter":
        return <FaTwitter />
      case "linkedin":
        return <FaLinkedin />
      case "instagram":
        return <FaInstagram />
      case "angellist":
        return <FaAngellist />
      case "crunchbase":
        return <img src={cbIcon} alt="crunchbase icon" />
      default:
        return null
    }
  }
  return (
    <Root className={className} href={link} target="_blank">
      {renderSocial(social)}
    </Root>
  )
}

export default SocialIcon
