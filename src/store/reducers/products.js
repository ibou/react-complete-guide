import { TOGGLE_FAV } from '../actions/products';

const initialState = {
  
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV: 
      return {
        ...state,
        products: updatedProducts
      };
    default:
      return state;
  }
};

export default productReducer;
