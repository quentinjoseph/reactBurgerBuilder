import React from 'react';
import mycssClasses from './BuildControl.css';
const buildControl = (props) => (
  <div className={mycssClasses.BuildControl}>
    <div className={mycssClasses.Label}>{props.label}</div>
    <button className={mycssClasses.Less}>Less</button>
    <button className={mycssClasses.More}>More</button>
  </div>
);

export default buildControl;