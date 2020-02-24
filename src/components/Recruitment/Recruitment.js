import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import { mq } from "../../utils/styles"
import SectionTitle from "../Shared/SectionTitle"
import dollar from "../../images/benefits-dollar.svg"
import world from "../../images/benefits-world.svg"
import network from "../../images/benefits-network.svg"
import people from "../../images/benefits-people.svg"
import Button from "../Button/Button"

const Root = styled.div`
  background-image: linear-gradient(to right, #e1e2e1 30%, #f8f6f6 0);
  background-color: #e1e2e1;
  padding: 5rem 1rem;

  @media (min-width: ${mq.m768}) {
    padding: 3rem 2rem;
  }

  @media (min-width: ${mq.m1024}) {
    padding: 6rem 3rem;
  }
`

const MainContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  background: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem;

  @media (min-width: ${mq.m1024}) {
    grid-template-columns: 6fr 4fr;
    grid-gap: 3rem;
    padding: 3rem 5rem;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;

  @media (min-width: ${mq.m1024}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const SingleBenefit = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;

  img {
    height: 3rem;
  }

  span {
    margin-top: 0.5rem;
  }
`

const CtaContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
`

const FindOutMore = styled(Link)`
  color: var(--dark-theme);
  text-decoration: none;
  font-weight: 600;
  margin-left: 3rem;

  :hover {
    text-decoration: underline;
  }
`

const ImgContainer = styled.div`
  display: none;

  @media (min-width: ${mq.m1024}) {
    display: initial;
  }
`

const StyledImg = styled(Img)`
  @media (min-width: ${mq.m1024}) {
    margin-top: -7rem;
  }
  @media (min-width: ${mq.m1280}) {
    margin-top: -8rem;
  }
`

const Recruitment = () => {
  const { recruitmentImg } = useStaticQuery(RECRUITMENT_QUERY)
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
          <CtaContainer>
            <Button text="apply to join" />
            <FindOutMore>find out more</FindOutMore>
          </CtaContainer>
        </InfoContainer>
        <ImgContainer>
          <StyledImg fluid={recruitmentImg.childImageSharp.fluid} />
        </ImgContainer>
      </MainContainer>
    </Root>
  )
}

export default Recruitment

export const RECRUITMENT_QUERY = graphql`
  query RecruitmentQuery {
    recruitmentImg: file(relativePath: { eq: "recruitment.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
