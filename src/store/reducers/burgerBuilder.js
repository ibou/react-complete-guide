import * as actionsTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
    ingredients: null,
    error: false,
    totalPrice: 4,
    building: false

};
const INGREDIENT_PRICES = {
    cheese: 0.32,
    salad: 0.53,
    bacon: 0.92,
    meat: 1.78,
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    };
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    };
    return updateObject(state, updatedState);
};
const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            meat: action.ingredients.meat,
            cheese: action.ingredients.cheese,
        },
        error: false,
        totalPrice: 4,
        building: false
    });
};
const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { 
        error: true, 
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionsTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionsTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionsTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }

};

export default reducer;