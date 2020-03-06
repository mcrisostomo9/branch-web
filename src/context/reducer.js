export const TOGGLE_QUALIFY = "TOGGLE_QUALIFY"
export const COMPLETE_STEP = "COMPLETE_STEP"
export const COMPLETE_QUALIFICATION = "COMPLETE_QUALIFICATION"
export const SUBMIT_APPLICATION = "SUBMIT_APPLICATION"
export const RESET_APPLICATION = "RESET_APPLICATION"

export const VIEW_BRANCH = "VIEW_BRANCH"
export const CLOSE_BRANCH = "CLOSE_BRANCH"

export const initialValues = {
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

export const reducer = (state, action) => {
  switch (action.type) {
    case RESET_APPLICATION:
      return initialValues
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
