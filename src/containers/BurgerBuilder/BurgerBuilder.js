import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummay/OrderSummary';
// import Backdrop from '../../components/UI/Backdrop/Backdrop';
const INGREDIENT_PRICES = {
  lettuce: .25,
  cheese: .5,
  meat: 2,
  bacon: 1.5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce:0,
      meat: 0,
      cheese:0,
      bacon:0
    },
    totalPrice: 4,
    purchasable:false,
    purchasing:false
  }

updatePurchaseState (ingredients) {


  const sum = Object.keys(ingredients).map(igKey => {
    return ingredients[igKey];
  }).reduce((sum, currentVal) =>{ return sum + currentVal },0);
  this.setState({
    purchasable: sum > 0
  })
}

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients:updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] > 0){
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
    
    
      updatedIngredients[type] = updatedCount;
      const priceSubtraction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceSubtraction;
      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngredients
      })
      this.updatePurchaseState(updatedIngredients);
    }
  }

  purchaseHandler = () => {
    this.setState({purchasing:true})
  }
  purchaseCancelHandler = () => {
    this.setState({purchasing:false})
  }
  
  purchaseContinuelHandler = () => {
    alert('You owe $' + this.state.totalPrice);
  }

  render (){
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0
    }
    return (
      <React.Fragment>
        {/* <Backdrop clearBackdrop={this.clearBackdropHandler} show={this.state.purchasing}/> */}
        <Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
          <OrderSummary purchaseContinue={this.purchaseContinuelHandler} purchaseCancelled={this.purchaseCancelHandler} ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler} 
          ingredientSubtracted={this.removeIngredientHandler} 
          purchasable={this.state.purchasable}
          ordering={this.purchaseHandler}
          disabled={disableInfo}/>
      </React.Fragment>
    );
  }
}


export default BurgerBuilder;