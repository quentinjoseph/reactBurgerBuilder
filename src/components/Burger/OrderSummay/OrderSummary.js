import React, {Component} from 'react';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
  // this can be a functional component.  doesn't have be a class
  componentWillUpdate(){
    // console.log('[OrderSummary]');
  }

  render(){
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        )
      });
      
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>your total is ${this.props.totalPrice.toFixed(2)}</strong></p>
        <p>continue to checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType='Danger'> Cancel </Button>
        <Button clicked={this.props.purchaseContinue} btnType='Success'>Continue</Button>
      </React.Fragment>
    )
  }

}

export default OrderSummary;