import { apiSlice } from './apiSlice';
const WORKOUTS_URL = '/api/workouts';

export const workoutsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allWorkouts: builder.query({
      query: (data) => `${WORKOUTS_URL}`,
      keepUnusedDataFor: 5,
      providesTags: ['Workout'],
    }),
    getSingleWorkout: builder.query({
      query: (id) => ({ url: `${WORKOUTS_URL}/${id}` }),
      providesTags: ['Workout'],
    }),
    addWorkout: builder.mutation({
      query: (data) => ({
        url: `${WORKOUTS_URL}/add`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Workout'],
    }),
    editWorkout: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${WORKOUTS_URL}/update/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Workout'],
    }),
  }),
});

export const {
  useAllWorkoutsQuery,
  useGetSingleWorkoutQuery,
  useAddWorkoutMutation,
  useEditWorkoutMutation,
} = workoutsApiSlice;
