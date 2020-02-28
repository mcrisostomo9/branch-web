import React, { useContext } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { mq } from "../../utils/styles"
import { BranchContext } from "../../context/BranchContext"
import PartnerInfo from "../Partner/PartnerInfo"

const Root = styled.div`
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  background-color: #fff;
  padding: 1.5rem 1rem;
  grid-gap: 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${mq.m768}) {
    background-image: linear-gradient(to right, #f26663, #eb2980 30%, #fff 0);
    background-color: #f26663;
    display: grid;
    padding: 2.5rem 2rem;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: ${mq.m768}) {
    margin-top: 0;
  }
`

const BranchName = styled.h3`
  margin: 0;
  font-size: 1.4rem;

  @media (min-width: ${mq.m768}) {
    font-size: 1.5rem;
    grid-gap: 2rem;
  }
  @media (min-width: ${mq.m1280}) {
    grid-gap: 2.5rem;
  }
`

const Tagline = styled.p`
  color: var(--light-gray-text);
  font-size: 1rem;

  @media (min-width: ${mq.m768}) {
    grid-gap: 2rem;
  }

  @media (min-width: ${mq.m1280}) {
    grid-gap: 2.5rem;
  }
`

const ViewButton = styled.button`
  background: none;
  border: none;
  align-self: baseline;
  display: inline-block;
  font-weight: 700;
  padding: 0.5rem 0.25rem 0;
  cursor: pointer;
  line-height: 0.6;
  border-bottom: 3px solid var(--pink-theme);
  font-size: 1.25rem;
  margin-top: 1rem;

  @media (min-width: ${mq.m768}) {
    margin-top: 0;
    font-size: 1rem;
  }

  @media (min-width: ${mq.m1280}) {
    font-size: 1.25rem;
  }
`

const StyledPartnerInfo = styled(PartnerInfo)`
  margin-top: 1rem;

  @media (min-width: ${mq.m768}) {
    align-items: flex-end;
    position: absolute;
    right: 150px;
    bottom: 1rem;
  }

  @media (min-width: ${mq.m1280}) {
    right: 160px;
  }
  @media (min-width: ${mq.m1680}) {
    right: 180px;
  }
`

const Photo = styled(Img)`
  height: 70px;
  width: 70px;
  right: 1.5rem;
  bottom: 1rem;
  position: absolute;

  @media (min-width: ${mq.m768}) {
    height: 100px;
    width: 100px;
    right: 1.75rem;
    bottom: -50px;
  }
  @media (min-width: ${mq.m1280}) {
    height: 120px;
    width: 120px;
    right: 1.5rem;
    bottom: -60px;
  }
  @media (min-width: ${mq.m1680}) {
    height: 140px;
    width: 140px;
    right: 1.5rem;
    bottom: -70px;
  }
`

const Branch = ({ branch }) => {
  const { toggleBranchOpen, setViewedBranch } = useContext(BranchContext)

  const handleClick = b => {
    setViewedBranch(b)
    toggleBranchOpen()
  }
  return (
    <Root>
      <Img fluid={branch.previewImg.asset.fluid} />
      <TextContainer>
        <BranchName>{branch.branchName}</BranchName>
        <Tagline>{branch.tagline}</Tagline>
        <ViewButton onClick={() => handleClick(branch)}>
          view case study
        </ViewButton>
      </TextContainer>
      <StyledPartnerInfo
        label={branch.partners[0].partnerLabel}
        partnerName={branch.partners[0].partnerName}
        position={branch.partners[0].partnerPosition}
      />
      <Photo
        fluid={branch.partners[0].partnerImg.asset.fluid}
        style={{ position: "absolute" }}
      />
    </Root>
  )
}

export default Branch
