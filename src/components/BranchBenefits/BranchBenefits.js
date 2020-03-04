import React from "react"
import styled from "styled-components"
import Container from "../Shared/Container"
import SectionHeader from "../Shared/SectionHeader"
import { branchBenefitsIcon } from "../../data/data"

const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
`

const SingleBenefit = styled.div`
  margin-top: 1rem;
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  img {
    height: 3rem;
  }

  p {
    margin: 1rem 0 0;
  }
`

const Benefit = styled.div`
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 1.25rem;
`

const BranchBenefits = () => {
  return (
    <Container>
      <SectionHeader
        title="branch benefits"
        subtitle="why it’s great being a member of branch"
        color="var(--light-theme)"
      />
      <BenefitsContainer>
        {branchBenefitsIcon.map(benefit => (
          <SingleBenefit>
            <img src={benefit.icon} alt="" />
            <Benefit>{benefit.title}</Benefit>
            <p>{benefit.description}</p>
          </SingleBenefit>
        ))}
      </BenefitsContainer>
    </Container>
  )
}

export default BranchBenefits
