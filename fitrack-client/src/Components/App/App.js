import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from '../Landing/Landing';
import Navigation from '../Header/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';
import WorkoutList from '../WorkoutList/WorkoutList';
import CreateWorkout from '../CreateWorkout/CreateWorkout';
import CreateUser from '../CreateUser/CreateUser';
import EditWorkout from '../EditWorkout/EditWorkout';
import './app.scss';

const App = () => {
  return (
    <div className="app" style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/workoutlist" element={<WorkoutList />} />
          ;
          <Route path="/createworkout" element={<CreateWorkout />} />
          ;
          <Route path="/createuser" element={<CreateUser />} />
          ;
          <Route path="/edit/:id" element={<EditWorkout />} />;
          <Route path="*" element={<PageNotFound />} />;
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
