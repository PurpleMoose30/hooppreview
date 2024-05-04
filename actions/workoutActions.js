// actions/workoutActions.js

export const getWorkouts = () => async dispatch => {
    try {
        const response = await fetch('/api/workouts');
        const data = await response.json();
        dispatch({ type: 'GET_WORKOUTS_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'GET_WORKOUTS_FAILURE', payload: error.message });
    }
};
