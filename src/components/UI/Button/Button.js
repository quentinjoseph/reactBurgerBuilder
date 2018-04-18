import React from 'react';
import myCssClasses from './Button.css';
const button = (props) => (
  <button className={[myCssClasses.Button, myCssClasses[props.btnType]].join(' ')}
  onClick={props.clicked}
  >
  {props.children}
  </button>
);


export default button;