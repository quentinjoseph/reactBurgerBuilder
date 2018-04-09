import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  lettuce: .25,
  cheese: .5,
  meat: 2,
  bacon: 1.5
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce:0,
      meat: 0,
      cheese:0,
      bacon:0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
  }

  removeIngredientHandler = (type) => {

  }

  render (){
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls onClick={this.addIngredientHandler}/>
      </React.Fragment>
    );
  }
}


export default BurgerBuilder;