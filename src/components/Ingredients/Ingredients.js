import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

const ingredientsReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      console.log('SET', action.ingredients);
      return action.ingredients;
    case 'ADD':
      console.log('ADD', action.ingredient);
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      console.log('DEL', action.id);

      return currentIngredients.filter(ingredient => ingredient.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
};

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      console.log('SENDING...', action);
      return { loading: true, error: null };
    case 'RESPONSE':
      console.log('RESPONSING...', action);
      return { ...currentHttpState, loading: false };
    case 'ERROR':
      console.log('ERROR ...', action);
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      console.log('CLEAR ...', action);
      return { ...currentHttpState, error: null };
    default:
      throw new Error('Should not get there!');
  }
}

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientsReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({
      type: 'SET',
      ingredients: filteredIngredients
    });

  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    dispatchHttp({ type: 'SEND' });
    fetch('https://react-hooks-update-445e1.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        dispatchHttp({ type: 'RESPONSE' });
        return response.json();

      })
      .then(responseData => {
        dispatch({
          type: 'ADD',
          ingredient: {
            id: responseData.name, ...ingredient
          }
        });
      }).catch(error => {
        dispatchHttp({ type: 'ERROR', errorMessage: '... Something wrong bad while adding : ' + error.message });
      });;
  }, []);


  const removeIngredientHandler = useCallback(ingredientId => {
    dispatchHttp({ type: 'SEND' });
    fetch(`https://react-hooks-update-445e1.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE'
    }).then(response => {
      dispatch({ type: 'DELETE', id: ingredientId });
      dispatchHttp({ type: 'RESPONSE' });
    }).catch(error => {
      dispatchHttp({ type: 'ERROR', errorMessage: '... Something wrong bad: ' + error.message });
    });
  }, []);

  const clearError = useCallback(() => {
    dispatchHttp({ type: 'CLEAR' });
  }, []);

  const ingredientList = useMemo(() => {
    return (<IngredientList
      ingredients={userIngredients}
      onRemoveItem={removeIngredientHandler} />);
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">

      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;