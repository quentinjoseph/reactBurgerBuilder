import React from 'react';
import mycssClasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
  {label: 'Lettuce', type: 'lettuce'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'}
];

const buildControls = (props) => (
  <div className={mycssClasses.BuildControls}>
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl key={control.label} 
      label={control.label} 
      added={() => props.ingredientAdded(control.type)} 
      subtracted={() => props.ingredientSubtracted(control.type)}
      disabled={props.disabled[control.type]} />
    ))}
    <button 
      disabled={!props.purchasable} 
      className={mycssClasses.OrderButton}
      onClick={props.ordering}>ORDER NOW</button>
  </div>
)

export default buildControls;