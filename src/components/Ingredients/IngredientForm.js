import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import LoadingIndicator from '../UI/LoadingIndicator';

const IngredientForm = React.memo(props => {
  let r = Math.random().toString(36).substr(9)+' '+Math.random().toString(36).substr(4,2);
  let n = (Math.random()*100).toFixed();
  const [enteredTitle, setEnteredTitle] = useState(r.toUpperCase());
  const [enteredAmount, setEnteredAmount] = useState(n); 

console.log('==============IngredientForm======================'); 

  const submitHandler = event => {
    event.preventDefault();
    const ingredient = {
      title: enteredTitle,
      amount: enteredAmount
    };
    props.onAddIngredient(ingredient);  
  };
 
  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={event => { 
                setEnteredTitle(event.target.value)
              }
              } /> 

          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={event => { 
                setEnteredAmount(event.target.value);
              }
              } />
            

          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator /> }
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;