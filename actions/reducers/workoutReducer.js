// reducers/workoutReducer.js

const initialState = [];

const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WORKOUTS_SUCCESS':
            return action.payload;
        case 'GET_WORKOUTS_FAILURE':
            return [];
        default:
            return state;
    }
};

export default workoutReducer;
