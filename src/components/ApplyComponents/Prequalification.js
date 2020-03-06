import React from "react"
import Button from "../Button/Button"
import {
  COMPLETE_QUALIFICATION,
  COMPLETE_STEP,
  RESET_APPLICATION,
  TOGGLE_QUALIFY,
} from "../../context/reducer"
import tickmark from "../../images/tickmark.svg"
import styled from "styled-components"
import { Link } from "gatsby"

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 880px;
  margin: auto;
`

const TextContainer = styled.div``

const Title = styled.h1`
  color: #e1e1e1;
  font-size: 5rem;
`

const Subtitle = styled.h5`
  font-weight: 600;
`

const Description = styled.p`
  line-height: 2;
`

const StepCounter = styled.div`
  span {
    color: var(--light-gray-text);
  }
`

const Questionnaire = styled.div`
  margin-top: 3rem;
`

const QuestionContainer = styled.div`
  margin-bottom: 1rem;
`

const Question = styled.div`
  background: #f8f6f6;
  padding: 1rem;
  border-radius: 5px;
`

const CompletedQuestion = styled(Question)`
  color: var(--pink-theme);
  position: relative;

  img {
    position: absolute;
    right: 1rem;
    height: auto;
    width: 25px;
  }
`

const ButtonContainer = styled.div`
  margin-top: 1rem;
`

const StyledButton = styled(Button)`
  margin: 0 0.5rem;
`

const YesButton = styled(StyledButton)`
  ${props => !props.stepIsQualified && "border-color: transparent"};
`

const NoButton = styled(StyledButton)`
  border-color: ${props =>
    props.isSelected ? "var(--pink-theme)" : "transparent"};
  ${props => props.isSelected && "color: var(--pink-theme)"};
`

const NonQualifiedMesssage = styled.p`
  font-weight: 600;
  color: var(--pink-theme);
`

const ApplyButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`

const StyledLink = styled(Link)`
  color: var(--light-gray-text);
  margin-top: 1rem;
  text-decoration: none;
`

const Prequalification = ({ state, dispatch }) => {
  const toggleQualify = (stepIsQualified, stepIndex) => {
    dispatch({
      type: TOGGLE_QUALIFY,
      stepIsQualified,
      stepIndex,
    })
  }

  const completeStep = stepIndex => {
    dispatch({ type: COMPLETE_STEP, stepIndex })
  }

  const renderActiveQuestion = ({ index, step }) => {
    return (
      <div key={step.stepNumber}>
        {step.complete ? (
          <QuestionContainer>
            <CompletedQuestion>
              {step.question} <img src={tickmark} alt="" />
            </CompletedQuestion>
          </QuestionContainer>
        ) : (
          <QuestionContainer>
            <Question>{step.question}</Question>
            <ButtonContainer>
              <YesButton
                stepIsQualified={step.stepIsQualified}
                text="Yes"
                onClick={() => completeStep(index)}
              />
              <NoButton
                text="No"
                onClick={() => toggleQualify(false, index)}
                isSelected={!step.stepIsQualified}
              />
            </ButtonContainer>
            {!step.stepIsQualified && (
              <NonQualifiedMesssage>
                {step.nonQualifiedMessage}
              </NonQualifiedMesssage>
            )}
          </QuestionContainer>
        )}
      </div>
    )
  }

  const renderFutureQuestion = ({ step, index }) => {
    return (
      <QuestionContainer key={step.stepNumber}>
        <Question style={{ opacity: 0.3 }}>{step.question}</Question>
      </QuestionContainer>
    )
  }

  return (
    <ContentContainer>
      <TextContainer>
        <Title>apply to branch</Title>
        <Subtitle>
          So, you think you have what it takes to join branch.
        </Subtitle>
        <Description>
          We'd love to have you onboard, however in the hopes of being
          transparent we're very selective on who we let become apart of our
          ecosystem, let's get to know eawch other first, to see if we're a good
          fit.
        </Description>
      </TextContainer>
      <StepCounter>
        {state.activeStep}
        <span>/4</span>
      </StepCounter>
      <Questionnaire>
        {state.steps.map((step, index) => {
          if (state.activeStep >= index + 1) {
            return renderActiveQuestion({ step, index })
          }
          return renderFutureQuestion({ step, index })
        })}
        {state.steps[3].complete && (
          <ApplyButtonContainer>
            <Button
              text="let me apply to branch"
              onClick={() => dispatch({ type: COMPLETE_QUALIFICATION })}
            />
            <StyledLink
              to="/"
              onClick={() => dispatch({ type: RESET_APPLICATION })}
            >
              I'm not ready, yet
            </StyledLink>
          </ApplyButtonContainer>
        )}
      </Questionnaire>
    </ContentContainer>
  )
}

export default Prequalification
