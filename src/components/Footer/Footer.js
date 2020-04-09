import React from "react"
import styled from "styled-components"
import Logo from "../Shared/Logo"
import Container from "../Shared/Container"
import Navlink from "../Shared/Navlink"
import { mq } from "../../utils/styles"
import SocialIcon from "../SocialIcon/SocialIcon"
import mailIcon from "../../images/icon-mail.svg"

const Root = styled.footer`
  background: var(--dark-text);
  border-top: 5px solid;
  border-image: linear-gradient(to right, #fbb73c, #ee4075);
  z-index: 1;
`

const InnerContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas: "logo" "nav" "social" "newsletter" "copyright";
  justify-content: center;
  align-items: center;

  @media (min-width: ${mq.m768}) {
    grid-template-areas: "logo nav social" "border border border" "copyright newsletter newsletter";
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 1px 1fr;
    grid-gap: 1rem 0;
  }
`

const Border = styled.div`
  grid-area: border;
  border: 0.25px solid #353c47;
`

const StyledLogo = styled(Logo)`
  grid-area: logo;
  width: fit-content;
  justify-self: center;

  @media (min-width: ${mq.m768}) {
    justify-self: flex-start;
  }
`

const NavContainer = styled.ul`
  grid-area: nav;
  list-style: none;
  display: grid;
  align-items: center;
  padding: 0;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;

  @media (min-width: ${mq.m768}) {
    grid-gap: 0;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: space-around;
  }
`

const SocialContainer = styled.div`
  grid-area: social;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 0.75rem;
  }

  svg {
    height: 20px;
    width: 20px;
  }

  @media (min-width: ${mq.m768}) {
    justify-content: flex-end;

    a {
      margin: 0 0 0 1.5rem;
    }
  }
`

const Copyright = styled.div`
  grid-area: copyright;
  color: var(--light-gray-text);
  font-size: 0.75rem;
  align-self: center;
  text-align: center;

  @media (min-width: ${mq.m768}) {
    text-align: left;
  }
`

const Newsletter = styled.div`
  grid-area: newsletter;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${mq.m768}) {
    flex-direction: row;
    justify-self: flex-end;
  }
`

const NewsletterText = styled.div`
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: auto;
    margin-right: 1rem;
  }
`

const Form = styled.form`
  margin-top: 1rem;
  input {
    width: 100%;
    min-width: 250px;
    border-radius: 5px;
    border: 2px solid #fff;
    padding: 1rem;
    color: #fff;
    background: transparent;
    font-size: 0.875rem;

    ::placeholder {
      color: #fff;
    }
  }

  @media (min-width: ${mq.m768}) {
    margin-left: 1rem;
    margin-top: 0;
  }
`

const Footer = () => {
  return (
    <Root>
      <InnerContainer>
        <StyledLogo />
        <NavContainer>
          <li>
            <Navlink to="/recruitment" text="recruitment" />
          </li>
          <li>
            <Navlink to="/projects" text="projects" />
          </li>
          <li>
            <Navlink to="/apply" text="apply now" />
          </li>
        </NavContainer>
        <SocialContainer>
          <SocialIcon isWhite social="twitter" />
          <SocialIcon isWhite social="facebook" />
          <SocialIcon isWhite social="instagram" />
          <SocialIcon isWhite social="linkedin" />
          <SocialIcon isWhite social="crunchbase" />
          <SocialIcon isWhite social="angellist" />
        </SocialContainer>
        <Border />
        <Copyright>© branch {new Date().getFullYear()}</Copyright>
        <Newsletter>
          <NewsletterText>
            <img src={mailIcon} alt="mail icon" />
            join the branch family
          </NewsletterText>
          <Form>
            <input type="email" placeholder="enter your email" />
          </Form>
        </Newsletter>
      </InnerContainer>
    </Root>
  )
}

export default Footer
