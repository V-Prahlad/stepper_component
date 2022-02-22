import {
  DECREMENT_CURRENT_STEP,
  INCREMENT_CURRENT_STEP,
  SET_STEPS,
} from "./constants";

export const defaultStepperState = {
  steps: [],
  currentStep: 0,
};

export const reducer = (state = defaultStepperState, action) => {
  const { currentStep, steps } = state;
  const { type, payload } = action;
  if (type === SET_STEPS)
    return {
      ...state,
      steps: payload.steps,
    };
  else if (type === INCREMENT_CURRENT_STEP)
    return {
      ...state,
      currentStep:
        currentStep < steps.length - 1 ? currentStep + 1 : currentStep,
    };
  else if (type === DECREMENT_CURRENT_STEP)
    return {
      ...state,
      currentStep: currentStep > 0 ? currentStep - 1 : currentStep,
    };
};
