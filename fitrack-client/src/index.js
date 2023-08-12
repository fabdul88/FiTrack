import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App/App';
import store from './store';
import { Provider } from 'react-redux';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  // useLocation,
} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { AnimatePresence } from 'framer-motion';
import {
  Landing,
  Login,
  SignUp,
  Dashboard,
  WorkoutList,
  CreateUser,
  CreateWorkout,
  EditWorkout,
  PageNotFound,
} from './lazyIndex';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workoutlist" element={<WorkoutList />} />
        <Route path="/createworkout" element={<CreateWorkout />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditWorkout />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />;
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
