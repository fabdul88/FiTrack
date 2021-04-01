import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./createUser.scss";

export default class CreateUser extends React.Component {
  state = {
    username: "",
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };

    axios
      .post("/users/add", user)
      .then((res) => {
        this.props.history.push({
          pathname: "/createworkout",
          state: { username: this.state.username },
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const transition = {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    };
    return (
      <motion.div
        className="user-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="user-container__card"
          initial={{ opacity: 0, y: "-500vw" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0, y: "-500vw" }}
          transition={transition}
        >
          <div className="user-container__title-container">
            <h2 className="user-container__title">CREATE USER </h2>
          </div>
          <div className="user-container__form-container">
            <div className="user-container__image"></div>
            <form className="user-container__form" onSubmit={this.onSubmit}>
              <div className="user-container__username-container">
                <label className="user-container__username-label" htmlFor="">
                  USERNAME
                </label>
                <input
                  className="user-container__user"
                  type="text"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="user-container__button-container">
                <button className="user-container__button">CREATE</button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    );
  }
}
