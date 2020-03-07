import React, { useState } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { Title } from "./ApplyTitle"
import Button from "../Button/Button"

// TODO refactor reused component
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 880px;
  margin: auto;
`

const Form = styled.form`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;

  label {
    text-align: left;
    margin-bottom: 0.5rem;
    color: #0e151f;
  }

  input,
  textarea {
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    width: 100%;
    padding: 0.75rem;

    ::placeholder {
      color: #e6e6e6;
    }
  }

  textarea {
    min-height: 150px;
  }
`

const StaticFormContainer = styled.div`
  display: grid;
  grid-template-areas: "name company" "email phone" "idea idea";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 1.5rem 3rem;
`

const BaseInput = styled.div`
  display: flex;
  flex-direction: column;
`

const ErrorMessage = styled.span`
  margin-top: 0.5rem;
  color: red;
`

const Name = styled(BaseInput)`
  grid-area: name;
`
const Company = styled(BaseInput)`
  grid-area: company;
`
const Email = styled(BaseInput)`
  grid-area: email;
`
const Phone = styled(BaseInput)`
  grid-area: phone;
`
const Idea = styled(BaseInput)`
  grid-area: idea;

  textarea {
    height: 100%;
  }
`

const DynamicFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  label {
    display: block;
  }
`

const LineItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-gap: 0.75rem;
  margin-bottom: 0.75rem;
`

const AddButton = styled(Button)`
  border: none;
  color: var(--dark-text);
  background: #e1e1e1;
  align-self: flex-end;
`

const WhyTextArea = styled(BaseInput)``

const SubmitButton = styled.button`
  border: none;
  background: var(--pink-theme);
  padding: 1rem;
  color: #fff;
  font-size: 1.25rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;

  span {
    color: #000;
  }
`

const SubmitForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const [lineItems, addLineItems] = useState(["line-0"])

  const onSubmit = data => {
    console.log(data)
  }

  const addLineItem = () => {
    const newKey = `line-${lineItems.length}`
    addLineItems([...lineItems, newKey])
  }

  return (
    <ContentContainer>
      <Title>submit application</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StaticFormContainer>
          <Name>
            <label>your name:</label>
            <input name="name" ref={register({ required: true })} />
            {errors.name && <ErrorMessage>Please enter your name</ErrorMessage>}
          </Name>
          <Company>
            <label>current company/position:</label>
            <input name="company" ref={register({ required: true })} />
            {errors.company && (
              <ErrorMessage>Please enter your company/position</ErrorMessage>
            )}
          </Company>
          <Email>
            <label>your email:</label>
            <input
              name="email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <ErrorMessage>Please enter an email</ErrorMessage>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </Email>
          <Phone>
            <label>your phone:</label>
            <input name="phone" ref={register({ required: true })} />
            {errors.phone && (
              <ErrorMessage>Please enter your phone number</ErrorMessage>
            )}
          </Phone>
          <Idea>
            <label>brief description of your new business idea::</label>
            <textarea name="idea" ref={register({ required: true })} />
            {errors.email && (
              <ErrorMessage>This field is required</ErrorMessage>
            )}
          </Idea>
        </StaticFormContainer>
        <DynamicFormContainer>
          <label>what have you done to-date?</label>
          {lineItems.map((line, index) => {
            return (
              <LineItem key={line}>
                <input type="text" placeholder="project name" />
                <input type="text" placeholder="https://" />
                <input type="text" placeholder="description" />
              </LineItem>
            )
          })}

          <AddButton type="button" text="add another" onClick={addLineItem} />
        </DynamicFormContainer>
        <WhyTextArea>
          <label>why are you the right person to build this?</label>
          <textarea name="why" />
        </WhyTextArea>
        <SubmitButton type="submit">
          submit application and apply to <span>branch</span>
        </SubmitButton>
      </Form>
    </ContentContainer>
  )
}

export default SubmitForm
