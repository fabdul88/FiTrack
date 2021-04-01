import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./Components/Landing/Landing";
import Navigation from "./Components/Header/Navigation";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import WorkoutList from "./Components/WorkoutList/WorkoutList";
import CreateWorkout from "./Components/CreateWorkout/CreateWorkout";
import CreateUser from "./Components/CreateUser/CreateUser";
import EditWorkout from "./Components/EditWorkout/EditWorkout";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <AnimatePresence>
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return <Landing />;
              }}
            />
            <Route
              path="/workoutlist"
              render={(props) => {
                return <WorkoutList {...props} />;
              }}
            />
            ;
            <Route
              path="/createworkout"
              render={(props) => {
                return <CreateWorkout {...props} />;
              }}
            />
            ;
            <Route
              path="/createuser"
              render={(props) => {
                return <CreateUser {...props} />;
              }}
            />
            ;
            <Route
              path="/edit/:id"
              render={(props) => {
                return <EditWorkout {...props} />;
              }}
            />
            ;
            <Route
              path="/404"
              component={() => {
                return <PageNotFound />;
              }}
            />
            ;
            <Redirect to="/404" />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;
