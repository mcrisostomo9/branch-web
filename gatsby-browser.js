import React from "react"
import { BranchProvider } from "./src/context/BranchContext"

export const wrapRootElement = ({ element }) => (
  <BranchProvider>{element}</BranchProvider>
)
