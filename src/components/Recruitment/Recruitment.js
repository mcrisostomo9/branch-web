import React from "react"
import styled from "styled-components"
import Container from "../Shared/Container"
import { mq } from "../../utils/styles"
import SectionTitle from "../Shared/SectionTitle"
import dollar from "../../images/benefits-dollar.svg"
import world from "../../images/benefits-world.svg"
import network from "../../images/benefits-network.svg"
import people from "../../images/benefits-people.svg"

const Root = styled.div`
  background-image: linear-gradient(to right, #e1e2e1 30%, #f8f6f6 0);
  background-color: #e1e2e1;
  padding: 5rem 0;
`

const MainContainer = styled(Container)`
  background: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${mq.m768}) {
    grid-template-columns: 5fr 4fr;
    grid-gap: 1rem;
  }
`

const InfoContainer = styled.div``

const RecruitmentSubtitle = styled.p`
  font-size: 1.5rem;
  span {
    color: var(--pink-theme);
    font-weight: 700;
  }
`

const Description = styled.p`
  color: #a1a1a1;
  line-height: 2;
`

const BenefitsContainer = styled.div`
  margin-top: 2rem;
`

const BranchBenefits = styled.span`
  font-weight: 600;
  font-size: 1.25rem;
`

const BenefitsList = styled.ul`
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
`

const SingleBenefit = styled.li`
  //flex-basis: 25%;
  display: flex;
  flex-direction: column;
  margin: 0;

  img {
    width: 3rem;
  }

  span {
    margin-top: 0.5rem;
  }
`

const Recruitment = () => {
  return (
    <Root>
      <MainContainer>
        <InfoContainer>
          <SectionTitle text="recruitment" color="var(--dark-theme)" />
          <RecruitmentSubtitle>
            join <span>branch</span> & benefit from success
          </RecruitmentSubtitle>
          <Description>
            our operators and implementors share a stake in the bussinesses they
            help shape Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea com eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quimodo consequat.
            Duis aute irure dolor in reprehenderit in.
          </Description>
          <BenefitsContainer>
            <BranchBenefits>branch benefits</BranchBenefits>
            <BenefitsList>
              <SingleBenefit>
                <img src={world} alt="" />
                <span>work on world class projects</span>
              </SingleBenefit>
              <SingleBenefit>
                <img src={people} alt="" />
                <span>experienced & successful team</span>
              </SingleBenefit>
              <SingleBenefit>
                <img src={network} alt="" />
                <span>great projects find you!</span>
              </SingleBenefit>
              <SingleBenefit>
                <img src={dollar} alt="" />
                <span>join the creative capital fund</span>
              </SingleBenefit>
            </BenefitsList>
          </BenefitsContainer>
        </InfoContainer>
        <div>placehoolder</div>
      </MainContainer>
    </Root>
  )
}

export default Recruitment
