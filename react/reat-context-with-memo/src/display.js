import React from "react";
import { withColorContext } from "./context/rgbContext";

function Display({ colorState }) {
  return (
    <div style={{ marginBottom: "10px" }}>{JSON.stringify(colorState)}</div>
  );
}

export default withColorContext(Display);
