import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ColorProvider } from "./context/rgbContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  rootElement
);
