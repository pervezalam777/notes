import React from "react";
import { withColorContext } from "./context/rgbContext";

const ActionComponents = ({ color, updateColor }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span style={{ marginRight: "10px" }}>{color}</span>
      <button onClick={() => updateColor(color, -15)}>{" - "}</button>
      <button onClick={() => updateColor(color, 15)}>{" + "}</button>
    </div>
  );
};

const areEqual = (prev, next) => {
  return prev.updateColor === next.updateColor;
};

export default withColorContext(React.memo(ActionComponents, areEqual));
