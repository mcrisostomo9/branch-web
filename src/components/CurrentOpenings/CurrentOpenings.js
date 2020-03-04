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
  grid-template-rows: auto 500px;

  @media (min-width: ${mq.m1024}) {
    grid-template-rows: 700px;
    grid-template-columns: 2fr 3fr;
  }
`

const InfoContainer = styled.div`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background: var(--pink-theme);
  padding: 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h5`
  font-size: 3.75rem;
  margin: 0;
`

const Subtitle = styled.p`
  margin: 0;
  line-height: 1.5;
`

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
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
  margin-top: 2rem;
  border-color: transparent;
`

const OpeningsContainer = styled.div`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #fff;
  padding: 2rem;
  overflow-y: auto;
`

const CurrentOpenings = () => {
  const { allSanityOpening } = useStaticQuery(CURRENT_OPENINGS_QUERY)
  return (
    <Container>
      <ContentContainer>
        <InfoContainer>
          <Title>current openings</Title>
          <Subtitle>
            just a few of our current positions, looking for people just like
            you
          </Subtitle>
          <ListContainer>
            {allSanityOpening.edges.map(company => {
              const c = company.node
              return (
                <LineItem key={c.companyName}>
                  <Number>{c.offers.length}</Number>
                  <CompanyName>{c.companyName}</CompanyName>
                </LineItem>
              )
            })}
          </ListContainer>
          <ApplyButton text="apply for branch" />
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
