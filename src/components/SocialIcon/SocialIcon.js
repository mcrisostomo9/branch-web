import React from "react"
import styled from "styled-components"
import {
  FaAngellist,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"

const Crunchbase = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 66 65"
    fill="#000"
    fillRule="evenodd"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="300"
    height="300"
    fontFamily="Roboto"
    fontSize="14px"
    textAnchor="middle"
  >
    <defs>
      <style type="text/css" />
    </defs>
    <use xlinkHref="#A" x=".5" y=".5" />
    <symbol id="A" overflow="visible">
      <g stroke="none">
        <path
          className="cbPath"
          d="M64 8c0-4.417-3.583-8-8-8H8C3.583 0 0 3.583 0 8v48c0 4.417 3.583 8 8 8h48c4.417 0 8-3.583 8-8z"
          fill="#fff"
        />
        <path
          d="M23.7 36.725c-1.413 3.013-4.738 4.63-7.982 3.884s-5.525-3.656-5.478-6.984 2.4-6.172 5.673-6.827a7.06 7.06 0 0 1 7.87 4.108h5.477c-1.473-6.062-7.245-10.067-13.44-9.325S4.963 27.577 4.963 33.815a12.33 12.33 0 0 0 24.297 2.91h-5.477zM46.526 21.46h-.904a12.16 12.16 0 0 0-6.024 2.122V9.862H34.6v35.283h5.025v-1.287c4.366 3.072 10.214 2.982 14.484-.22s5.992-8.793 4.265-13.844-6.5-8.416-11.85-8.334zm7.065 13.2v.22a7.01 7.01 0 0 1-.192.863c-.096.307-.2.607-.342.9v.1a7.08 7.08 0 0 1-4.943 3.875l-.67.1h-.15a7.01 7.01 0 0 1-.767 0c-.32-.001-.64-.024-.958-.068h-.22c-.62-.1-1.223-.285-1.794-.548h-.137a7.09 7.09 0 0 1-1.588-1.068c-.48-.438-.9-.94-1.246-1.492-.17-.28-.322-.574-.452-.876a7.03 7.03 0 0 1 .082-5.82 7.08 7.08 0 0 1 5.668-4.012 6.76 6.76 0 0 1 .726 0 7.08 7.08 0 0 1 6.983 6.873 7.06 7.06 0 0 1 0 .945z"
          fillRule="nonzero"
        />
      </g>
    </symbol>
  </svg>
)

const Root = styled.a`
  cursor: pointer;
  color: ${props => (props.isWhite ? "#fff" : "#000")};

  svg {
    width: 20px;
    height: auto;
  }

  :hover {
    color: var(--pink-theme);

    .cbPath {
      fill: var(--pink-theme);
    }
  }
`

const SocialIcon = ({ social, className, link, isWhite }) => {
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
        return <Crunchbase />
      default:
        return null
    }
  }
  return (
    <Root className={className} href={link} target="_blank" isWhite={isWhite}>
      {renderSocial(social)}
    </Root>
  )
}

export default SocialIcon
