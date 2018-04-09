import React from 'react';
import cssClasses from './Layout.css';
const layout = (props) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={cssClasses.content}>
      {props.children}
    </main>
  </React.Fragment>
);

export default layout;