import React, {Component} from 'react';
import mycssClasses from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState){
    // if (nextProps.show !== this.props.show){
    //   return true;
    // }
    return nextProps.show !== this.props.show;//short way to write what's commented out above.
  }

  componentWillUpdate(){
    console.log('[Modal] Will Update');
  }

  render () {

    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.closeModal} />
        <div className={mycssClasses.Modal} 
          style=
          {{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}


export default Modal;