import React from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "../Landing/Landing";
import Navigation from "../Header/Navigation";
import PageNotFound from "../PageNotFound/PageNotFound";
import WorkoutList from "../WorkoutList/WorkoutList";
import CreateWorkout from "../CreateWorkout/CreateWorkout";
import CreateUser from "../CreateUser/CreateUser";
import EditWorkout from "../EditWorkout/EditWorkout";
import "./app.scss";

const App = () => {
  const location = useLocation();
  return (
    <div className="app" style={{ overflowX: "hidden", overflowY: "hidden" }}>
      {/* <Router> */}
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      {/* </Router> */}
    </div>
  );
};

export default App;
