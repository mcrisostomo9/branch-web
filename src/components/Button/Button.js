import React from "react"
import styled from "styled-components"

const Root = styled.button`
  background: none;
  border-radius: 5px;
  border: 2px solid #000;
  padding: 1rem 2rem;
  font-weight: 600;
  cursor: pointer;
`

const Button = ({ onClick, text, className, type }) => {
  return (
    <Root type={type} onClick={onClick} className={className}>
      {text}
    </Root>
  )
}

export default Button
