import React from "react-dom";
import Stepper from "./components/Stepper";
import styled from "styled-components";
import { useStepper } from "./context";

function App() {
  const { incrementCurrentStep, decrementCurrentStep } = useStepper();

  return (
    <div className="container">
      <Stepper>
        <Stepper.Steps>
          <Stepper.Step id="first" name="Step 1">
            <StepBody>
              <p>Starting Point - First Steps.</p>
              <div>
                <Button onClick={incrementCurrentStep}>Next step</Button>
              </div>
            </StepBody>
          </Stepper.Step>
          <Stepper.Step id="second" name="Step 2">
            <StepBody>
              <p>You are on 2nd Steps.</p>
              <div>
                <Button onClick={decrementCurrentStep}>Previous step</Button>
                <Button onClick={incrementCurrentStep}>Next step</Button>
              </div>{" "}
            </StepBody>
          </Stepper.Step>
          <Stepper.Step id="third" name="Step 3">
            <StepBody>
              <p>You are on 3rd Steps.</p>
              <div>
                <Button onClick={decrementCurrentStep}>Previous step</Button>
                <Button onClick={incrementCurrentStep}>Next step</Button>
              </div>{" "}
            </StepBody>
          </Stepper.Step>
          <Stepper.Step id="forth" name="Step 4">
            <StepBody>
              <p>This is End Point - Last Step.</p>
              <div>
                <Button onClick={decrementCurrentStep}>Previous step</Button>
                <Button onClick={incrementCurrentStep}>Next step</Button>
              </div>{" "}
            </StepBody>
          </Stepper.Step>
        </Stepper.Steps>
      </Stepper>
    </div>
  );
}

const StepBody = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 20px;
  cursor: pointer;
  outline: none;
  background: #fff;
  border: 1px solid #000;
  padding: 6px 12px;
`;

export default App;
