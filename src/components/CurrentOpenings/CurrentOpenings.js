import React from "react"
import styled from "styled-components"
import Container from "../Shared/Container"
import { mq } from "../../utils/styles"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../Button/Button"
import CompanyOpenings from "./CompanyOpenings"

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 400px;

  @media (min-width: ${mq.m1024}) {
    grid-template-rows: 500px;
    grid-template-columns: 2fr 3fr;
  }

  @media (min-width: ${mq.m1280}) {
    grid-template-rows: 600px;
  }

  @media (min-width: ${mq.m1680}) {
    grid-template-rows: 700px;
  }
`

const BaseContainer = styled.div`
  padding: 2rem 1rem 0;

  @media (min-width: ${mq.m1024}) {
    padding: 2.5rem 2.5rem 0;
  }

  @media (min-width: ${mq.m1280}) {
    padding: 3rem 3rem 0;
  }

  @media (min-width: ${mq.m1680}) {
    padding: 5rem 5rem 0;
  }
`

const InfoContainer = styled(BaseContainer)`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: var(--pink-theme);
  padding-bottom: 2rem;

  @media (min-width: ${mq.m1024}) {
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0;
  }
`

const TextContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`

const Title = styled.h5`
  margin: 0;
  font-size: 2.25rem;

  @media (min-width: ${mq.m768}) {
    font-size: 2rem;
  }
  @media (min-width: ${mq.m1024}) {
    font-size: 2.75rem;
  }
  @media (min-width: ${mq.m1280}) {
    font-size: 3.25rem;
  }
  @media (min-width: ${mq.m1440}) {
    font-size: 3.75rem;
  }
`

const Subtitle = styled.p`
  line-height: 1.5;
  margin: 1rem 0 0;
`

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;

  @media (min-width: ${mq.m1280}) {
    margin-top: 2rem;
  }
`

const LineItem = styled.li`
  margin-top: 1rem;
  padding: 0;
  display: flex;
  align-items: center;
`

const Number = styled.div`
  border-radius: 50%;
  background: #000;
  height: 1.5rem;
  width: 1.5rem;
  font-weight: 600;
  line-height: 1.5rem;
  text-align: center;
`

const CompanyName = styled.div`
  color: #fff;
  font-weight: 600;
  margin-left: 0.5rem;
`

const ApplyButton = styled(Button)`
  background: #fabc2b;
  border-color: transparent;
  margin-top: 2rem;

  @media (min-width: ${mq.m1280}) {
    margin-top: 2.5rem;
  }

  @media (min-width: ${mq.m1440}) {
    margin-top: 4rem;
  }
`

const OpeningsContainer = styled(BaseContainer)`
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  background: #fff;
  overflow-y: auto;

  @media (min-width: ${mq.m1024}) {
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0;
  }
`

const CurrentOpenings = () => {
  const { allSanityOpening } = useStaticQuery(CURRENT_OPENINGS_QUERY)
  return (
    <Container>
      <ContentContainer>
        <InfoContainer>
          <TextContainer>
            <Title>current openings</Title>
            <Subtitle>
              just a few of our current positions, looking for people just like
              you
            </Subtitle>
            <ListContainer>
              {allSanityOpening.edges.map(company => {
                const { companyName, offers } = company.node
                return (
                  <LineItem key={companyName}>
                    <Number>{offers.length}</Number>
                    <CompanyName>{companyName}</CompanyName>
                  </LineItem>
                )
              })}
            </ListContainer>
            <ApplyButton text="apply for branch" />
          </TextContainer>
        </InfoContainer>
        <OpeningsContainer>
          {allSanityOpening.edges.map(company => {
            return (
              <CompanyOpenings
                key={company.node.companyName}
                company={company.node}
              />
            )
          })}
        </OpeningsContainer>
      </ContentContainer>
    </Container>
  )
}

export default CurrentOpenings

const CURRENT_OPENINGS_QUERY = graphql`
  query CurrentOpeningsQuery {
    allSanityOpening {
      edges {
        node {
          companyName
          logo {
            asset {
              url
            }
          }
          offers {
            positionName
            positionOffer
            positionLocation
          }
        }
      }
    }
  }
`
