import React, { useContext } from "react"
import styled from "styled-components"
import Container from "../Shared/Container"
import bg from "../../images/bg-apply.png"
import { Context } from "../../context/Context"
import Prequalification from "./Prequalification"
import SubmitForm from "./SubmitForm"

const Root = styled.div`
  background-image: url(${bg});
  background-size: cover;
`

const StyledContainer = styled(Container)`
  background: #fff;
  border-radius: 5px;
  margin-bottom: 3rem;
`

const Application = () => {
  const { state, dispatch } = useContext(Context)
  return (
    <Root>
      <StyledContainer>
        {state.isQualified && state.activeStep === 4 ? (
          <SubmitForm />
        ) : (
          <Prequalification state={state} dispatch={dispatch} />
        )}
      </StyledContainer>
    </Root>
  )
}

export default Application
