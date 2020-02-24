import React from "react"
import styled from "styled-components"
import Container from "../Shared/Container"
import SectionHeader from "../Shared/SectionHeader"

const Root = styled(Container)``

const Community = () => {
  return (
    <Root>
      <SectionHeader
        title="community"
        subtitle="find our the latest launches, and branch news"
        color="var(--light-theme)"
      />
    </Root>
  )
}

export default Community
