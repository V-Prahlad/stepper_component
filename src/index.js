import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { StepperProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <StepperProvider>
      <App />
    </StepperProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
