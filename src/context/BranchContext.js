import React, { createContext, useState } from "react"

const defaultValues = {
  isBranchOpen: false,
}
export const BranchContext = createContext()

export const BranchProvider = ({ children }) => {
  const [isBranchOpen, setBranchOpen] = useState(false)
  const [viewedBranch, setViewedBranch] = useState(null)

  const toggleBranchOpen = () => {
    setBranchOpen(!isBranchOpen)
    // setViewedBranch({ name: branch })
  }

  return (
    <BranchContext.Provider
      value={{
        ...defaultValues,
        isBranchOpen,
        toggleBranchOpen,
        viewedBranch,
        setViewedBranch,
      }}
    >
      {children}
    </BranchContext.Provider>
  )
}
