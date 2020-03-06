import React, { createContext, useReducer } from "react"
import { reducer } from "./reducer"

export const initialState = {
  isBranchOpen: false,
  viewedBranch: null,
  isQualified: false,
  activeStep: 1,
  steps: [
    {
      stepNumber: 1,
      stepIsQualified: true,
      complete: false,
      question: "Are you the CEO, or decision maker at the company?",
      nonQualifiedMessage:
        "sorry, as branch likes to move fast, we need to work directly with CEOs.",
    },
    {
      stepNumber: 2,
      stepIsQualified: true,
      complete: false,
      question: "Does your company currently have over 100 employees?",
      nonQualifiedMessage:
        "sorry, as branch likes to move fast, we need to work directly with CEOs.",
    },
    {
      stepNumber: 3,
      stepIsQualified: true,
      complete: false,
      question: "Are you looking for a design/dev agency?",
      nonQualifiedMessage:
        "sorry, as branch likes to move fast, we need to work directly with CEOs.",
    },
    {
      stepNumber: 4,
      stepIsQualified: true,
      complete: false,
      question: "Are you ready to supercharge your company?",
      nonQualifiedMessage:
        "sorry, as branch likes to move fast, we need to work directly with CEOs.",
    },
  ],
  applicationSubmitted: false,
}

export const Context = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isBranchOpen, viewedBranch } = state

  return (
    <Context.Provider value={{ isBranchOpen, viewedBranch, state, dispatch }}>
      {children}
    </Context.Provider>
  )
}
