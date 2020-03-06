import React, { createContext, useReducer } from "react"
import { initialValues, reducer } from "./reducer"

export const Context = createContext(initialValues)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)
  const { isBranchOpen, viewedBranch } = state

  return (
    <Context.Provider
      value={{
        ...initialValues,
        isBranchOpen,
        viewedBranch,
        dispatch,
        state,
      }}
    >
      {children}
    </Context.Provider>
  )
}
