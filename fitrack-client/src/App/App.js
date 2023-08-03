import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from '../Components/Header/Navigation';

import './app.scss';
const Landing = lazy(() =>
  import('../pages/Landing/Landing').then((module) => ({
    default: module.Landing,
  }))
);
const WorkoutList = lazy(() =>
  import('../pages/WorkoutList/WorkoutList').then((module) => ({
    default: module.WorkoutList,
  }))
);
const CreateUser = lazy(() =>
  import('../pages/CreateUser/CreateUser').then((module) => ({
    default: module.CreateUser,
  }))
);
const CreateWorkout = lazy(() =>
  import('../pages/CreateWorkout/CreateWorkout').then((module) => ({
    default: module.CreateWorkout,
  }))
);
const EditWorkout = lazy(() =>
  import('../pages/EditWorkout/EditWorkout').then((module) => ({
    default: module.EditWorkout,
  }))
);
const PageNotFound = lazy(() =>
  import('../pages/PageNotFound/PageNotFound').then((module) => ({
    default: module.PageNotFound,
  }))
);

const App = () => {
  const location = useLocation();
  return (
    <div className="app" style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/workoutlist" element={<WorkoutList />} />
            ;
            <Route path="/createworkout" element={<CreateWorkout />} />
            ;
            <Route path="/createuser" element={<CreateUser />} />
            ;
            <Route path="/edit/:id" element={<EditWorkout />} />
            ;
            <Route path="*" element={<PageNotFound />} />;
          </Routes>
        </Suspense>
      </AnimatePresence>
    </div>
  );
};

export default App;
