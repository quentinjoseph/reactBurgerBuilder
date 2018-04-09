import React from 'react';
import cssClasses from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, indx) => {
      return <BurgerIngredients key={ingredientKey + indx} type={ingredientKey} />;
    })
  }).reduce((arr, el)=>{
    return arr.concat(el)
  }, []);
  if(transformedIngredients.length === 0){
    transformedIngredients = <p>Please add ingredients.</p> 
  }
  return (
    <div className={cssClasses.Burger}>
      <BurgerIngredients type="bread-top" />
        {console.log(transformedIngredients)}
        {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;