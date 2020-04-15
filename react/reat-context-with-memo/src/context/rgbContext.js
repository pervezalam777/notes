import contextBuilder from "./contextBuilder";

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
    case "green":
    case "blue":
      let colorValue = state[action.type];
      let newValue = colorValue + action.payload;
      colorValue = newValue <= 255 && newValue >= 0 ? newValue : colorValue;
      return { ...state, [action.type]: colorValue };
    default:
      return state;
  }
};

const updateColor = dispatch => (color, value) => {
  dispatch({ type: color, payload: value });
};

export const {
  Context: ColorCotext,
  Provider: ColorProvider,
  withContext: withColorContext
} = contextBuilder(
  reducer,
  { updateColor },
  { red: 0, green: 0, blue: 0 },
  "colorState"
);
