import React, { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import PartnerInfo from "../Partner/PartnerInfo"
import SocialIcon from "../SocialIcon/SocialIcon"
import { mq } from "../../utils/styles"

const Root = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  height: 70%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 10;
  max-width: 1400px;

  @media (min-width: ${mq.m1024}) {
    //height: 700px;
    height: auto;
  }

  @media (min-width: ${mq.m1680}) {
    width: 85%;
  }
`

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.color && props.color};
  padding: 1.5rem 2rem;
`

const Logo = styled.img`
  width: 100px;
`

const Website = styled.a`
  text-decoration: none;
  border-radius: 50px;
  background: #fff;
  padding: 1rem 2rem;
  color: #000;
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem 2rem;
  background: #fff;
  grid-gap: 1rem;

  @media (min-width: ${mq.m1024}) {
    grid-template-columns: 1fr 1fr;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`

const PartnerContainer = styled.div`
  display: flex;
`

const StyledPartnerInfo = styled(PartnerInfo)`
  justify-content: center;
`

const Partner = styled.div`
  display: flex;
`

const PartnerImg = styled(Img)`
  width: 75px;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`

const Tagline = styled.h4`
  margin: 0;
`

const Description = styled.p`
  margin: 0.5rem 0 0;
  color: var(--dark-text);
  line-height: 2;
`

const ImgContainer = styled.div`
  width: 100%;
  margin: auto;
`

const MainImg = styled(Img)`
  //width: 100%;
  //height: auto;
`

const BulletPoints = styled.ul`
  list-style: none;
  margin: 1rem 0 0;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: #f8f6f6;
`

const BulletContainer = styled.li`
  display: flex;
  align-items: center;
  line-height: 2;
  span {
    font-weight: 600;
    margin-left: 1rem;
  }
`

const BulletCircle = styled.div`
  background: #f8f6f6;
  border-radius: 50%;
  height: 5px;
  width: 5px;
  position: relative;
  box-shadow: 0 0 0 0.5rem ${props => props.color && props.color};
`

const SocialContainer = styled.div`
  margin-top: 1rem;
  display: flex;

  a {
    margin: 0 0.75rem;
  }

  svg {
    height: 20px;
    width: 20px;
  }

  @media (min-width: ${mq.m768}) {
    a {
      margin: 0 1.5rem 0 0;
    }
  }
`

const colors = ["#fabc2b", "#f1765f", "#e61c6e"]

const BranchFull = ({
  branch: {
    branchName,
    url,
    logo,
    color,
    description,
    mainImg,
    tagline,
    bulletPoints,
    partners,
  },
  toggleBranchOpen,
  isBranchOpen,
}) => {
  const node = useRef()

  const handleClickOutside = useCallback(
    e => {
      if (node.current.contains(e.target)) {
        // inside click
        return
      }
      // outside click
      toggleBranchOpen()
    },
    [toggleBranchOpen]
  )

  useEffect(() => {
    if (isBranchOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isBranchOpen, handleClickOutside])

  return (
    <Root
      ref={node}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <TitleBar color={color.hex}>
        <Logo src={logo.asset.url} alt={`${branchName} logo`} />
        <Website href={url} target="_blank">
          view website
        </Website>
      </TitleBar>
      <ContentContainer>
        <ImgContainer>
          <MainImg fluid={mainImg.asset.fluid} />
        </ImgContainer>
        <InfoContainer>
          <PartnerContainer>
            {partners.map(partner => {
              return (
                <Partner>
                  <PartnerImg fluid={partner.partnerImg.asset.fluid} />
                  <StyledPartnerInfo
                    label={partner.partnerLabel}
                    partnerName={partner.partnerName}
                    position={partner.partnerPosition}
                  />
                </Partner>
              )
            })}
          </PartnerContainer>
          <DescriptionContainer>
            <Tagline>{tagline}</Tagline>
            <Description>{description}</Description>
          </DescriptionContainer>
          <BulletPoints>
            {bulletPoints.map((bullet, index) => {
              return (
                <BulletContainer key={bullet}>
                  <BulletCircle color={colors[index]} />
                  <span>{bullet}</span>
                </BulletContainer>
              )
            })}
          </BulletPoints>
          <SocialContainer>
            <SocialIcon social="twitter" />
            <SocialIcon social="facebook" />
            <SocialIcon social="instagram" />
            <SocialIcon social="linkedin" />
            <SocialIcon social="crunchbase" />
            <SocialIcon social="angellist" />
          </SocialContainer>
        </InfoContainer>
      </ContentContainer>
    </Root>
  )
}

export default BranchFull
