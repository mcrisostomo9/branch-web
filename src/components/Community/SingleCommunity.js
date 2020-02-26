import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { mq } from "../../utils/styles"
import StyledLink from "../Shared/StyledLink"

const Container = styled.div`
  background: ${props => props.bg && props.bg};
  color: ${props => (props.bg === "#ffffff" ? "#000" : "#fff")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`

const ContentContainer = styled.div`
  max-width: 300px;
`

const Wrapper = styled.div``

const FullImgContainer = styled.div`
  width: 100%;
  height: 100%;
`

const StyledImg = styled(Img)`
  border-radius: 5px;
  height: 100%;
`

const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 250px;
  margin: auto;
  min-width: 200px;

  @media (min-width: ${mq.m768}) {
    max-width: 200px;
  }

  @media (min-width: ${mq.m1280}) {
    max-width: 225px;
  }
`

const Text = styled.p`
  font-size: 1.5rem;
`

const SingleCommunity = ({
  logo,
  background_color,
  text,
  linkText,
  fullImage,
}) => {
  return (
    <>
      {fullImage ? (
        <Wrapper>
          <FullImgContainer>
            <StyledImg
              fluid={logo.childImageSharp.fluid}
              backgroundColor={background_color}
            />
          </FullImgContainer>
        </Wrapper>
      ) : (
        <Container bg={background_color}>
          <ContentContainer>
            <ImgContainer>
              <Img
                fluid={logo.childImageSharp.fluid}
                backgroundColor={background_color}
              />
            </ImgContainer>
            {text && <Text>{text}</Text>}
            {linkText && <StyledLink text={linkText} color="#fff" to="/" />}
          </ContentContainer>
        </Container>
      )}
    </>
  )
}

export default SingleCommunity
