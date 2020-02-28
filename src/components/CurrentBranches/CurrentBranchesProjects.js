import React, { useContext } from "react"
import styled from "styled-components"

import Container from "../Shared/Container"
import BranchFull from "../BranchFull/BranchFull"
import { BranchContext } from "../../context/BranchContext"
import { AnimatePresence } from "framer-motion"
import SectionHeader from "../Shared/SectionHeader"
import { mq } from "../../utils/styles"
import BranchProject from "./BranchProject"

const BranchContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 2rem;

  @media (min-width: ${mq.m768}) {
    grid-template-columns: 1fr 1fr;
  }
`

const CurrentBranchesProjects = ({ branches }) => {
  const { isBranchOpen, toggleBranchOpen, viewedBranch } = useContext(
    BranchContext
  )
  return (
    <>
      <Container>
        <SectionHeader
          title="current branches"
          subtitle="some of our most recent partnerships"
          color="var(--light-theme)"
        />
        <BranchContainer>
          {branches.edges.map((branch, index) => (
            <BranchProject branch={branch.node} isBranchOpen={isBranchOpen} />
          ))}
        </BranchContainer>
      </Container>
      <AnimatePresence>
        {isBranchOpen && (
          <BranchFull
            branch={viewedBranch}
            isBranchOpen={isBranchOpen}
            toggleBranchOpen={toggleBranchOpen}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default CurrentBranchesProjects
