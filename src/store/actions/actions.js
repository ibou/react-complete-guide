export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = (value) => {
    return {
        type: INCREMENT,
        val: value
    };
}
export const decrement = (value) => {
    return {
        type: DECREMENT,
        val: value
    };
}
export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    };
}
export const storedResult = (res) => {
    return dispatch => {

        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);

    }
}

export const deleteResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resElId
    };
}