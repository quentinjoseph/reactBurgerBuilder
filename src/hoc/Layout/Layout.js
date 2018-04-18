import React, {Component} from 'react';
import cssClasses from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer:false
  }

sideDrawerClosedHandler = () =>{
  this.setState({
    showSideDrawer:false
  });
}
sideDrawerToggleHandler = () =>{
  this.setState(
    //showSideDrawer:!this.state.showSideDrawer this works but could cause issues
    (prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer}
    }
  );
}

  render (){
    return(
      <React.Fragment>
        <Toolbar openSideDrawer={this.sideDrawerToggleHandler}/>
        <SideDrawer toggle={this.sideDrawerToggleHandler} open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={cssClasses.content}>
          {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}

export default Layout;