import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"
import SectionTitle from "../Shared/SectionTitle"
import SectionSubtitle from "../Shared/SectionSubtitle"
import Container from "../Shared/Container"
import Branch from "./Branch"

const Root = styled(Container)``

const FirstLineContainer = styled.div`
  display: flex;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const BranchesContainer = styled(Container)`
  //margin-top: 3rem;
  //padding-left: 5rem;
  padding-top: 0;
`

const params = {
  // lazy: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
}

const CurrentBranches = () => {
  const { ripple, placeholder } = useStaticQuery(BRANCH_QUERY)
  return (
    <>
      <Root>
        <FirstLineContainer>
          <TextContainer>
            <SectionTitle text="current branches" color="var(--light-theme)" />
            <SectionSubtitle
              color="var(--light-theme)"
              text="some of our most recent partnerships"
            />
          </TextContainer>
        </FirstLineContainer>
      </Root>
      <BranchesContainer>
        {/*<Swiper {...params}>*/}
        <Branch
          branch={ripple}
          placeholder={placeholder}
          mainImg={ripple}
          branchName="ripple"
          tagline="Instantly move money to all corners of the world"
          label="partner"
          partnerName="Toby Daniels"
          position="CEO of Venture Stream"
          partnerImg={placeholder}
        />
        {/*</Swiper>*/}
      </BranchesContainer>
    </>
  )
}

export default CurrentBranches

export const BRANCH_QUERY = graphql`
  query BranchQuery {
    ripple: file(relativePath: { eq: "ripple.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    placeholder: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
