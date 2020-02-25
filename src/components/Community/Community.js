import React from "react"
import styled from "styled-components"
import Container from "../Shared/Container"
import SectionHeader from "../Shared/SectionHeader"
import SingleCommunity from "./SingleCommunity"
import { graphql, useStaticQuery } from "gatsby"
import SingleBlog from "./SingleBlog"
import { mq } from "../../utils/styles"
import Button from "../Button/Button"

const Root = styled(Container)``

const CommunityContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, auto);
  grid-auto-flow: column;
  //grid-auto-flow: column;
  grid-gap: 1rem;

  @media (min-width: ${mq.m768}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
  }
  @media (min-width: ${mq.m1280}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`

const ViewButton = styled(Button)`
  border: none;
  background: #fff;
  display: flex;
  margin: 2rem auto 0;
  justify-self: center;
`

const Community = () => {
  const {
    logoRichUncles,
    logoCultivation,
    logoForge,
    logoVoot,
  } = useStaticQuery(COMMUNITY_QUERY)
  return (
    <Root>
      <SectionHeader
        title="community"
        subtitle="find our the latest launches, and branch news"
        color="var(--light-theme)"
      />
      <CommunityContainer>
        <SingleCommunity
          logo={logoRichUncles}
          background_color="#7d56ff"
          url="https://google.com"
          text="achieved $250m valuation"
          linkText="learn more"
        />
        <SingleCommunity
          logo={logoForge}
          background_color="-webkit-linear-gradient(#fbb73c, #ee4075)"
          url="https://google.com"
          text="achieved $250m valuation"
        />
        <SingleBlog textHeader="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque nulla saepe!" />
        <SingleCommunity
          logo={logoCultivation}
          background_color="#6c9462"
          url="https://google.com"
          linkText="learn more"
        />
        <SingleCommunity logo={logoVoot} fullImage />
        <SingleBlog textHeader="Lorem ipsum dolor sit consectetur!" />
      </CommunityContainer>
      <ViewButton text="view all" />
    </Root>
  )
}

export default Community

export const COMMUNITY_QUERY = graphql`
  query CommunityQuery {
    logoRichUncles: file(relativePath: { eq: "logo-rich-uncles.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    logoCultivation: file(relativePath: { eq: "logo-cultivation.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    logoForge: file(relativePath: { eq: "logo-forge.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    logoVoot: file(relativePath: { eq: "voot.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
