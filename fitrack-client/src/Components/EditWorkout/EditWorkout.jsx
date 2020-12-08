import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./editWorkout.scss";

export default class EditWorkout extends React.Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/workouts/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date),
        });
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        // checking if there are users in the database
        if (response.data.length > 0) {
          this.setState({
            // returning each user in the array by username
            users: response.data.map((user) => user.username),
          });
        }
      })
      .catch((error) => console.log(error));
  }

  onchangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  onchangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  onchangeDuration = (e) => {
    this.setState({
      duration: e.target.value,
    });
  };
  onchangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const workout = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    axios
      .post(
        `http://localhost:8080/workouts/update/${this.props.match.params.id}`,
        workout
      )
      .then((res) => {
        this.props.history.push({
          pathname: "/workoutlist",
          state: { username: this.state.username },
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
      <motion.div
        className="edit-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="edit-container__card"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: "0" }}
          exit={{ opacity: 0, x: "-100vw" }}
          transition={transition}
        >
          <div className="edit-container__title-container">
            <h2 className="edit-container__title">EDIT WORKOUT</h2>
          </div>
          <div className="edit-container__form-container">
            <form
              onSubmit={this.onSubmit}
              className="edit-container__form"
              action=""
            >
              <div className="edit-container__username-container">
                <label className="edit-container__username-label" htmlFor="">
                  USERNAME
                </label>
                <select
                  className="edit-container__username"
                  value={this.state.username}
                  onChange={this.onchangeUsername}
                >
                  {this.state.users.map((user) => {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="edit-container__description-container">
                <label className="edit-container__description-label" htmlFor="">
                  DESCRIPTION
                </label>
                <textarea
                  className="edit-container__description"
                  value={this.state.description}
                  onChange={this.onchangeDescription}
                />
              </div>
              <div className="edit-container__duration-container">
                <label className="edit-container__duration-label" htmlFor="">
                  DURATION (in Minutes)
                </label>
                <input
                  className="edit-container__duration"
                  type="number"
                  min="0"
                  max="59"
                  value={this.state.duration}
                  onChange={this.onchangeDuration}
                />
              </div>
              <div className="edit-container__date-container">
                <label className="edit-container__date-label" htmlFor="">
                  DATE
                </label>
                <input
                  className="edit-container__date"
                  type="date"
                  selected={this.state.date}
                  onChange={this.onchangeDate}
                />
              </div>
              <div className="edit-container__button-container">
                <button className="edit-container__button">UPDATE !</button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    );
  }
}