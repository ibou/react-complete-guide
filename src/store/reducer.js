import * as actionTypes from "./actions";
const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    console.log('====================================');
    console.log(state);
    console.log('====================================');
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + action.val;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter + action.val
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date().getTime(), value: state.counter })
            };
        case actionTypes.DELETE_RESULT: 
            const updatedArray = state.results.filter(result => result.id !==action.resultedId); 
            return {
                ...state,
                results: updatedArray
            };

        default:
            return {
                ...state,
                counter: state.counter
            };
    }
};
export default reducer;
