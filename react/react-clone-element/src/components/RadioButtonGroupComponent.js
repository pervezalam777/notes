import React from 'react';
function RadioButtonGroupComponent(props) {
  const RenderChildren = () => (
    React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        name: props.name,
      })
    })
  )

  return (
    <div>
      {<RenderChildren />}
    </div>
  )
}

export default RadioButtonGroupComponent