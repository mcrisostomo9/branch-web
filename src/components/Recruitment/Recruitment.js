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
import StyledLink from "../Shared/StyledLink"
import Container from "../Shared/Container"

const Root = styled.div`
  background-image: linear-gradient(to right, #e1e2e1 30%, #f8f6f6 0);
  background-color: #e1e2e1;
  padding: 5rem 0;

  @media (min-width: ${mq.m768}) {
    padding: 3rem 0;
  }

  @media (min-width: ${mq.m1024}) {
    padding: 6rem 0;
  }
`

const MainContainer = styled.div`
  width: 100%;
  //max-width: var(--max-width);
  //margin: auto;
  background: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem;

  @media (min-width: ${mq.m1024}) {
    grid-template-columns: 6fr 4fr;
    grid-gap: 3rem;
    padding: 3rem 5rem;
    //width: 90%;
  }

  @media (min-width: ${mq.m1680}) {
    //width: 100%;
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

const CtaLink = styled(StyledLink)`
  margin-left: 3rem;
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
      <Container>
        <MainContainer>
          <InfoContainer>
            <SectionTitle text="talent" color="var(--dark-theme)" />
            <RecruitmentSubtitle>
              network of experts committed to <span>success</span>
            </RecruitmentSubtitle>
            <Description>
              All branches stem from the same root & we believe in the power of
              community. Our approach relies on our ever-growing network of
              talented individuals to give our founding teams the support &
              tools needed. Some have decades of experience, others bring fresh
              perspectives. Together, we solve problems & open doors to new
              opportunities.
              <br />
              <br />
              Many have aspirations to work for a startup, but are afraid of the
              risk associated with that name. With Branch, each company is
              well-funded but that doesn’t mean there isn’t a lot to do. If
              you’re looking for a challenge, creative opportunity & not afraid
              of wearing multiple hats. We invite you to tell us more about
              yourself because with a Branch Startup, you’ll never ystop working
              toward something better.
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
              <Link to="apply">
                <Button text="apply to join" />
              </Link>
              <CtaLink
                text="learn more"
                color="var(--dark-theme)"
                to="/recruitment"
              />
            </CtaContainer>
          </InfoContainer>
          <ImgContainer>
            <StyledImg fluid={recruitmentImg.childImageSharp.fluid} />
          </ImgContainer>
        </MainContainer>
      </Container>
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
