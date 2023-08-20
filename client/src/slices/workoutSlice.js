import { createSlice } from '@reduxjs/toolkit';
import { timeConvert } from '../helpers/convertTime';
import { date2str } from '../helpers/date2srt';

const initialState = {
  workouts: [],
};
const workoutSlice = createSlice({
  name: 'allWorkouts',
  initialState,
  reducers: {
    getWorkouts: (state, action) => {
      state.workouts = action.payload;
      console.log('ACTION>>>', action);
    },
    // addWorkouts: (state, action) => {
    //   // state.workouts.push(action.payload);
    //   state.workouts = state.workouts.push(action.payload);
    // },
  },
});
export const { getWorkouts, addWorkouts, getSingleWorkout } =
  workoutSlice.actions;
export default workoutSlice.reducer;
