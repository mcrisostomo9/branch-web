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
  grid-template-areas: "logo nav social" "copyright newsletter newsletter";
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;

  grid-gap: 1rem 0;
`

const StyledLogo = styled(Logo)`
  grid-area: logo;
  width: fit-content;
`

const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: space-around;
`

const SocialContainer = styled.div`
  grid-area: social;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    margin: 0 0.75rem;
  }

  svg {
    height: 20px;
    width: 20px;
  }

  @media (min-width: ${mq.m768}) {
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
`

const Newsletter = styled.div`
  grid-area: newsletter;
  align-self: center;
  justify-self: flex-end;
  display: flex;
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
  //margin: auto auto auto 2rem;

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

  margin-left: 1rem;
`

const Footer = () => {
  return (
    <Root>
      <InnerContainer>
        <StyledLogo />
        <NavContainer>
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
            <Navlink to="/page-2" text="apply now" />
          </li>
        </NavContainer>
        <SocialContainer>
          <SocialIcon social="twitter" />
          <SocialIcon social="facebook" />
          <SocialIcon social="instagram" />
          <SocialIcon social="linkedin" />
          <SocialIcon social="crunchbase" />
          <SocialIcon social="angellist" />
        </SocialContainer>
        <Copyright>© branch {new Date().getFullYear()}</Copyright>
        <Newsletter>
          <NewsletterText>
            <img src={mailIcon} />
            join the branch newsletter
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
