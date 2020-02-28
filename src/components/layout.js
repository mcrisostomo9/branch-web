import React from "react"

import "./layout.css"
import styled from "styled-components"

const StyledMain = styled.main``

const Layout = ({ className, children }) => {
  return (
    <>
      <StyledMain className={className}>{children}</StyledMain>
    </>
  )
}
export default Layout
