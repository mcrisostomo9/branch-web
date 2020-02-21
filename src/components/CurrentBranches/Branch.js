import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Root = styled.div`
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5rem;
  max-width: 1000px;
  width: 100%;
  padding: 2.5rem 2rem;
  background-color: red;
  background-image: linear-gradient(to right, #f26663, #eb2980 30%, #fff 0);
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BranchName = styled.h3`
  font-size: 1.875rem;
  margin: 0;
`

const Tagline = styled.p`
  color: var(--light-gray-text);
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
  margin-top: 2rem;
`

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  bottom: 1rem;
  right: 180px;
`

const Label = styled.label`
  font-size: 0.5rem;
  background: #fcba3b;
  border-radius: 5px;
  font-weight: 600;
  padding: 0.25rem;
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
  height: 140px;
  width: 140px;
  right: 1.5rem;
  bottom: -70px;
  position: absolute;
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
