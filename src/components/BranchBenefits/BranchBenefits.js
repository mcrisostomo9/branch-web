import React from "react"
import styled from "styled-components"
import Container from "../Shared/Container"
import SectionHeader from "../Shared/SectionHeader"
import { branchBenefitsIcon } from "../../data/data"
import { mq } from "../../utils/styles"

const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  justify-content: space-between;
`

const SingleBenefit = styled.div`
  margin-top: 1rem;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0 0.25rem;

  img {
    height: 3rem;
  }

  p {
    margin: 1rem 0 0;
    color: #4c5159;
  }

  @media (min-width: ${mq.m768}) {
    flex-basis: 30%;
  }

  @media (min-width: ${mq.m1024}) {
    flex-basis: 25%;
  }

  @media (min-width: ${mq.m1280}) {
    flex-basis: 20%;
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
          <SingleBenefit key={benefit.title}>
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
