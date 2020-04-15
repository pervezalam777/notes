import React from "react";
import "./styles.css";
import ColorButton from "./actionComponents";
import Display from "./display";

export default function App() {
  return (
    <div className="App">
      <ColorButton color="red" />
      <ColorButton color="green" />
      <ColorButton color="blue" />
      <Display />
    </div>
  );
}
