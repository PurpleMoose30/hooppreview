// App.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkouts } from './actions/workoutActions';

const App = () => {
    const dispatch = useDispatch();
    const workouts = useSelector(state => state.workouts);

    useEffect(() => {
        dispatch(getWorkouts());
    }, [dispatch]);

    return (
        <div>
            <h1>Workouts</h1>
            <ul>
                {workouts.map(workout => (
                    <li key={workout.id}>{workout.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
