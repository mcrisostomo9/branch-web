import React from "react"
import styled from "styled-components"
import Button from "../Button/Button"

const Root = styled.div``

const HeaderContainer = styled.div`
  font-weight: 600;
  text-transform: lowercase;
  margin-bottom: 0.5rem;

  span {
    color: var(--pink-theme);
  }
`

const OpeningsContainer = styled.div``

const Opening = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f8f6f6;
  border-radius: 5px;
`

const LeftContainer = styled.div`
  display: flex;

  img {
    width: 50px;
    height: auto;
  }
`

const InfoContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Position = styled.div`
  font-weight: 600;
`

const Location = styled.div``

const CompanyOpenings = ({ company: { offers, logo, companyName } }) => {
  return (
    <Root>
      <HeaderContainer>
        <span>{offers.length}</span> {companyName}
      </HeaderContainer>
      <OpeningsContainer>
        {offers.map((offer, index) => {
          return (
            <Opening key={index}>
              <LeftContainer>
                <img src={logo.asset.url} alt={`${companyName} logo`} />
                <InfoContainer>
                  <Position>{offer.positionName}</Position>
                  <Location>{offer.positionLocation}</Location>
                </InfoContainer>
              </LeftContainer>
              <Button text="view offer" />
            </Opening>
          )
        })}
      </OpeningsContainer>
    </Root>
  )
}

export default CompanyOpenings
