import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Components/Header/Navigation';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default App;
