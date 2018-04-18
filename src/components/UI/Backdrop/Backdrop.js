import React from 'react';
import mycssClasses from './Backdrop.css';


const backdrop = (props) => (

  props.show ? <div onClick={props.clicked} className={mycssClasses.Backdrop}></div> : null
);

export default backdrop;