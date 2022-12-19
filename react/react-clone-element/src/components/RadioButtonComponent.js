import React from 'react';
function RadioButtonComponent(props) {
  return (
    <label>
      <input type="radio" value={props.value} name={props.name} />
     {props.children}
    </label>
  )
}

export default RadioButtonComponent