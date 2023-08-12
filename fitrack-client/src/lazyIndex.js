import { lazy } from 'react';

export const Landing = lazy(() =>
  import('./pages/Landing/Landing').then((module) => ({
    default: module.Landing,
  }))
);
export const Login = lazy(() =>
  import('./pages/Login/Login').then((module) => ({
    default: module.Login,
  }))
);
export const SignUp = lazy(() =>
  import('./pages/SignUp/SignUp').then((module) => ({
    default: module.SignUp,
  }))
);
export const Dashboard = lazy(() =>
  import('./pages/Dashboard/Dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);
export const WorkoutList = lazy(() =>
  import('./pages/WorkoutList/WorkoutList').then((module) => ({
    default: module.WorkoutList,
  }))
);
export const CreateUser = lazy(() =>
  import('./pages/CreateUser/CreateUser').then((module) => ({
    default: module.CreateUser,
  }))
);
export const CreateWorkout = lazy(() =>
  import('./pages/CreateWorkout/CreateWorkout').then((module) => ({
    default: module.CreateWorkout,
  }))
);
export const EditWorkout = lazy(() =>
  import('./pages/EditWorkout/EditWorkout').then((module) => ({
    default: module.EditWorkout,
  }))
);
export const PageNotFound = lazy(() =>
  import('./pages/PageNotFound/PageNotFound').then((module) => ({
    default: module.PageNotFound,
  }))
);
