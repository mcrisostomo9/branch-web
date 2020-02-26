import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { mq } from "../../utils/styles"

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
    //padding: 2.5rem 2rem;
    grid-gap: 2.5rem;
  }
`

const Tagline = styled.p`
  color: var(--light-gray-text);

  @media (min-width: ${mq.m768}) {
    font-size: 1.5rem;
    //padding: 2.5rem 2rem;
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
    margin-top: 2rem;
  }
`

const Label = styled.label`
  font-size: 0.5rem;
  background: #fcba3b;
  border-radius: 5px;
  font-weight: 600;
  padding: 0.25rem;
`

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 1rem;

  @media (min-width: ${mq.m768}) {
    align-items: flex-end;
    position: absolute;
    right: 180px;
    bottom: 1rem;
  }
`

const PartnerName = styled.span`
  font-weight: 600;
  margin-top: 0.5rem;
`

const Position = styled.span`
  color: var(--light-gray-text);
  font-size: 0.75rem;
`

const Photo = styled(Img)`
  height: 70px;
  width: 70px;
  right: 1.5rem;
  bottom: 1rem;
  position: absolute;

  @media (min-width: ${mq.m768}) {
    height: 140px;
    width: 140px;
    right: 1.5rem;
    bottom: -70px;
  }
`

const Branch = ({
  mainImg,
  branchName,
  tagline,
  label,
  partnerName,
  position,
  partnerImg,
}) => {
  return (
    <Root>
      <Img fluid={mainImg.childImageSharp.fluid} />
      <TextContainer>
        <BranchName>{branchName}</BranchName>
        <Tagline>{tagline}</Tagline>
        <ViewButton>view case study</ViewButton>
      </TextContainer>
      <InfoText>
        <Label>{label}</Label>
        <PartnerName>{partnerName}</PartnerName>
        <Position>{position}</Position>
      </InfoText>
      <Photo
        fluid={partnerImg.childImageSharp.fluid}
        style={{ position: "absolute" }}
      />
    </Root>
  )
}

export default Branch
