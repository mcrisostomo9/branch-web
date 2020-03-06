import { initialState } from "./Context"

export const TOGGLE_QUALIFY = "TOGGLE_QUALIFY"
export const COMPLETE_STEP = "COMPLETE_STEP"
export const COMPLETE_QUALIFICATION = "COMPLETE_QUALIFICATION"
export const SUBMIT_APPLICATION = "SUBMIT_APPLICATION"
export const RESET_APPLICATION = "RESET_APPLICATION"

export const VIEW_BRANCH = "VIEW_BRANCH"
export const CLOSE_BRANCH = "CLOSE_BRANCH"

export const reducer = (state, action) => {
  switch (action.type) {
    case RESET_APPLICATION:
      return initialState
    case COMPLETE_STEP:
      return {
        ...state,
        activeStep: action.stepIndex === 3 ? 4 : action.stepIndex + 2,
        steps: state.steps.map((step, index) => {
          return index === action.stepIndex
            ? { ...step, stepIsQualified: true, complete: true }
            : step
        }),
      }
    case TOGGLE_QUALIFY:
      return {
        ...state,
        steps: state.steps.map((step, index) => {
          return index === action.stepIndex
            ? { ...step, stepIsQualified: action.stepIsQualified }
            : step
        }),
      }
    case COMPLETE_QUALIFICATION:
      return {
        ...state,
        isQualified: true,
      }
    case SUBMIT_APPLICATION:
      return
    case VIEW_BRANCH:
      return { ...state, viewedBranch: action.branch, isBranchOpen: true }
    case CLOSE_BRANCH:
      return { ...state, viewedBranch: null, isBranchOpen: false }
    default:
      return state
  }
}
