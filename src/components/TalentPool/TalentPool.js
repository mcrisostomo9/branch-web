import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Container from "../Shared/Container"
import SectionHeader from "../Shared/SectionHeader"
import { graphql, useStaticQuery } from "gatsby"
import { mq } from "../../utils/styles"
import Button from "../Button/Button"
import StyledLink from "../Shared/StyledLink"

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-column-gap: 1rem;

  @media (min-width: ${mq.m768}) {
    grid-template-columns: 1fr 1fr;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`

const Leading = styled.h5`
  color: var(--pink-theme);
  margin: 0;
  font-size: 1.875rem;
`

const Description = styled.p`
  line-height: 2;
  color: var(--light-gray-text);
  margin: 2rem 0 0;
`

const StyledImg = styled(Img)`
  display: none;

  @media (min-width: ${mq.m768}) {
    display: initial;
  }

  @media (min-width: ${mq.m1024}) {
    margin-right: -10rem;
    margin-top: -5rem;
  }

  @media (min-width: ${mq.m1440}) {
    margin-right: -13rem;
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

const TalentPool = () => {
  const { talentBubble } = useStaticQuery(TALENT_QUERY)
  return (
    <Container>
      <SectionHeader
        title="invest in your future"
        subtitle="participate in profit & equity-share"
        color="var(--light-theme)"
      />
      <ContentContainer>
        <TextContainer>
          <Leading>earn today, invest in the future</Leading>
          <Description>
            We’re determined to challenge the way job opportunities are
            structured. At Branch, we believe everyone should earn present-day,
            while investing in their future. That mindset brought the creative
            capital fund to fruition. All team-members, in addition to their
            salary & project compensation, obtain shares in the creative capital
            fund where collectively profit-sharing and equity-earn out are
            received by our startups are distributed depending on the shares
            earned by each individual.
          </Description>
          <CtaContainer>
            <Button text="apply to join" />
            <CtaLink text="learn more" color="var(--dark-theme)" to="/" />
          </CtaContainer>
        </TextContainer>
        <StyledImg fluid={talentBubble.childImageSharp.fluid} />
      </ContentContainer>
    </Container>
  )
}

export default TalentPool

export const TALENT_QUERY = graphql`
  query TalentQuery {
    talentBubble: file(relativePath: { eq: "recruitment-bubble.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
