import React, { useContext } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { mq } from "../../utils/styles"
import { Context } from "../../context/Context"
import PartnerInfo from "../Partner/PartnerInfo"
import ViewCaseStudyButton from "../Shared/ViewCaseStudyButton"
import { VIEW_BRANCH } from "../../context/reducer"

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const ImgContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 100%;
  padding: 1.5rem 1rem;
  background-image: linear-gradient(to right, #f26663, #eb2980 50%, #fff 0);
  background-color: #f26663;

  @media (min-width: ${mq.m768}) {
    padding: 2.5rem 2rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  padding: 0 1rem;

  @media (min-width: ${mq.m768}) {
    padding: 0 2rem;
  }
`

const BranchName = styled.h3`
  margin: 0;
  font-size: 1.4rem;

  @media (min-width: ${mq.m768}) {
    font-size: 1.5rem;
  }
`

const Tagline = styled.p`
  color: var(--light-gray-text);
  font-size: 1rem;
`

const PartnerContainer = styled.div`
  border-top: 1px solid #eae9e9;
  border-bottom: 1px solid #eae9e9;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${mq.m768}) {
    padding: 0.5rem 2rem;
  }

  button {
    align-self: center;
  }
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledPartnerInfo = styled(PartnerInfo)`
  margin-left: 0.5rem;
`

const Photo = styled(Img)`
  height: 50px;
  width: 50px;
`

const BranchProject = ({ branch }) => {
  const { dispatch } = useContext(Context)

  const handleClick = b => {
    dispatch({ type: VIEW_BRANCH, branch: b })
  }
  return (
    <Root>
      <ImgContainer>
        <Img
          fluid={branch.previewImg.asset.fluid}
          backgroundColor={branch.color.hex}
        />
      </ImgContainer>
      <TextContainer>
        <BranchName>{branch.branchName}</BranchName>
        <Tagline>{branch.tagline}</Tagline>
      </TextContainer>
      <PartnerContainer>
        <InnerContainer>
          <Photo fluid={branch.partners[0].partnerImg.asset.fluid} />
          <StyledPartnerInfo
            label={branch.partners[0].partnerLabel}
            partnerName={branch.partners[0].partnerName}
            position={branch.partners[0].partnerPosition}
          />
        </InnerContainer>
        <ViewCaseStudyButton onClick={() => handleClick(branch)}>
          view details
        </ViewCaseStudyButton>
      </PartnerContainer>
    </Root>
  )
}

export default BranchProject

//

//
