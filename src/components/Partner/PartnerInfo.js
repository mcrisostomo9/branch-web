import React from "react"
import styled from "styled-components"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
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

const PartnerInfo = ({ className, label, partnerName, position }) => {
  return (
    <Root className={className}>
      <Label>{label}</Label>
      <PartnerName>{partnerName}</PartnerName>
      <Position>{position}</Position>
    </Root>
  )
}

export default PartnerInfo
