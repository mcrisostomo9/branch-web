import React from "react"
import styled from "styled-components"
import Container from "../Shared/Container"
import { mq } from "../../utils/styles"
import bg from "../../images/newsletter-bg.png"

const Root = styled(Container)`
  margin-top: 5rem;
  position: relative;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: ${mq.m768}) {
    flex-direction: row;
    grid-gap: 2rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  max-width: 500px;
`

const Title = styled.div`
  color: #fff;
  font-size: 2rem;
`

const Description = styled.p`
  color: var(--light-gray-text);
`

const Form = styled.form`
  margin: auto;
  width: 100%;
  max-width: 650px;
  margin-left: 2rem;

  input {
    width: 100%;
    border-radius: 1px;
    border: none;
    padding: 1rem;
  }
`

const Newsletter = () => {
  return (
    <Root>
      <TextContainer>
        <Title>
          join the <strong>branch</strong> newsletter
        </Title>
        <Description>
          insights on our business and how we help shape the digital world one
          branch at a time...
        </Description>
      </TextContainer>
      <Form>
        <input type="email" placeholder="Please enter your email" />
      </Form>
    </Root>
  )
}

export default Newsletter
