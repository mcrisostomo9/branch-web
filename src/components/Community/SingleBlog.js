import React from "react"
import styled from "styled-components"
import StyledLink from "../Shared/StyledLink"
import { mq } from "../../utils/styles"

const Root = styled.div`
  padding: 2rem;
  background: #fff;
  border-radius: 5px;
  border: 1px solid var(--light-theme);
`

const ContentContainer = styled.div`
  max-width: 370px;
`

const LatestNews = styled.h4`
  font-weight: 600;
  letter-spacing: 1.5px;
  font-size: 0.875rem;
`

const BlogHeader = styled.h3`
  color: var(--pink-theme);
  font-size: 1.5rem;

  @media (min-width: ${mq.m768}) {
    font-size: 1.75rem;
  }
  @media (min-width: ${mq.m1024}) {
    font-size: 2rem;
  }
  @media (min-width: ${mq.m1280}) {
    font-size: 2.5rem;
  }
`

const SingleBlog = ({ textHeader }) => {
  return (
    <Root>
      <ContentContainer>
        <LatestNews>LATEST NEWS</LatestNews>
        <BlogHeader>{textHeader}</BlogHeader>
        <StyledLink text="read post" color="var(--dark-text)" to="/" />
      </ContentContainer>
    </Root>
  )
}

export default SingleBlog
