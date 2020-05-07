import * as actionTypes from "../actions/actionsTypes";

export const increment = (value) => {
    return {
        type: actionTypes.INCREMENT,
        val: value
    };
}
export const decrement = (value) => {
    return {
        type: actionTypes.DECREMENT,
        val: value
    };
}