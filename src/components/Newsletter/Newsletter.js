import React from "react"
import styled from "styled-components"
import Container from "../Shared/Container"
import { mq } from "../../utils/styles"
import bg from "../../images/newsletter-bg.png"
import mailIcon from "../../images/icon-mail.svg"
import { useForm } from "react-hook-form"

const Root = styled(Container)`
  display: flex;
  margin-top: 5rem;
`

const MainContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #0e151f;

  @media (min-width: ${mq.m768}) {
    flex-direction: row;
    background: url(${bg}) no-repeat;
    background-size: cover;

    padding: 3rem;
    justify-content: center;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  align-items: center;
  text-align: center;

  @media (min-width: ${mq.m768}) {
    align-items: baseline;
    text-align: left;
  }
`

const Title = styled.div`
  color: #fff;
  font-size: 1.5rem;

  img {
    width: 30px;
    height: auto;
    margin-right: 1rem;
  }

  @media (min-width: ${mq.m768}) {
    font-size: 1.75rem;
  }
  @media (min-width: ${mq.m1280}) {
    font-size: 2rem;
  }
`

const Description = styled.p`
  color: var(--light-gray-text);
`

const Form = styled.form`
  position: relative;
  width: 100%;
  border-radius: 5px;

  //margin: auto auto auto 2rem;
  margin-top: 1rem;

  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 1rem;
  }

  @media (min-width: ${mq.m768}) {
    max-width: 650px;
    margin-left: 3rem;
  }

  button {
    position: absolute;
    top: 50%;
    right: 0;
    background: transparent;
    border: none;
  }
`

const Newsletter = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    console.log(data)
    fetch("/.netlify/functions/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }

  return (
    <Root>
      <MainContainer>
        <TextContainer>
          <Title>
            <img src={mailIcon} alt="" />
            join the <strong>branch</strong> family
          </Title>
          <Description>
            We’re dedicated to innovation & we’re constantly building. Join the
            family and get the latest straight to your inbox.
          </Description>
        </TextContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            ref={register}
            name="email"
            placeholder="Please enter your email"
          />
          {/*<button type="submit">submit</button>*/}
        </Form>
      </MainContainer>
    </Root>
  )
}

export default Newsletter
