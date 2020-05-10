import * as actionTypes from "../actions/actionsTypes";

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res *2
    };
}
export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter; 
            dispatch(saveResult(res));
        }, 2000);

    }
}

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
}