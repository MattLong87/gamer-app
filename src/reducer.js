import * as actions from './actions';

const initialState = {
    allUsers: [
    ]
};

export default (state = initialState, action) => {
    if (action.type === actions.ADD_PROFILE) {
        //update this to update state in future
        return state;
    }

    else if (action.type === actions.FETCH_DATA_SUCCESS) {
        return action.data;
    }

    return state;
}