import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import "./workoutList.scss";

class WorkoutList extends React.Component {
  state = {
    workouts: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/workouts")
      .then((res) => {
        this.setState({
          workouts: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  deleteWorkout = (id) => {
    axios
      .delete(`http://localhost:8080/workouts/${id}`)
      .then((response) => console.log(response.data));
    this.setState({
      workouts: this.state.workouts.filter((element) => element._id !== id),
    });
  };

  render() {
    const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
      <motion.div
        className="main-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="main-list__card"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: "0" }}
          exit={{ opacity: 0, x: "-100vw" }}
          transition={transition}
        >
          <div className="main-list__title-container">
            <h2 className="main-list__title">USERS GOAL LIST </h2>
          </div>
          <div className="main-list__category-container main-list__hide-tabdesk">
            <div className="main-list__username-container">
              <h4 className="main-list__username">USERNAME</h4>
            </div>
            <div className="main-list__description-container">
              <h4 className="main-list__description">DESCRIPTION</h4>
            </div>
            <div className="main-list__duration-container">
              <h4 className="main-list__duration">
                DURATION <br></br>(in Min)
              </h4>
            </div>
            <div className="main-list__date-container">
              <h4 className="main-list__date">DATE</h4>
            </div>
            <div className="main-list__action-container">
              <h4 className="main-list__action">ACTION</h4>
            </div>
          </div>
          <div>
            <hr className="main-list__category-hr main-list__hide-tabdesk" />
          </div>

          {this.state.workouts.map((user) => {
            return (
              <div key={user.username}>
                <motion.div
                  whileHover={{
                    textShadow: "0 0 8px rgb(255,255,255)",
                    scale: 1.02,
                    duration: 1,
                  }}
                  className="main-list__result-container-mobile main-list__hide-mobile"
                >
                  <div className="main-list__top-section-mobile">
                    <div className="main-list__username-container-mobile">
                      <h4 className="main-list__username-label-mobile">
                        USERNAME
                      </h4>
                      <p className="main-list__username-mobile main-list__hide-mobile">
                        {user.username}
                      </p>
                    </div>
                    <div className="main-list__date-container-mobile">
                      <h4 className="main-list__date-label-mobile">DATE</h4>
                      <p className="main-list__date-mobile main-list__hide-mobile">
                        {user.date.substring(0, 10)}
                      </p>
                    </div>
                  </div>

                  <div className="main-list__bottom-section-mobile">
                    <div className="main-list__description-container-mobile">
                      <h4 className="main-list__description-label-mobile">
                        DESCRIPTION
                      </h4>
                      <p className="main-list__description-mobile main-list__hide-mobile">
                        {user.description}
                      </p>
                    </div>
                    <div className="main-list__action-container-mobile">
                      <h4 className="main-list__action-label-mobile">ACTION</h4>
                      <div>
                        <Link
                          to="#"
                          onClick={() => {
                            this.deleteWorkout(user._id);
                          }}
                        >
                          <button className="main-list__action-button-delete-mobile main-list__hide-mobile">
                            <motion.img
                              whileHover={{
                                scale: 1.4,
                                textShadow: "0 0 8px rgb(0,0,0)",
                              }}
                              transition={{ type: "spring", stiffness: 1000 }}
                              className="main-list__action-delete-mobile"
                              src={Delete}
                              alt="Delete"
                            />
                          </button>
                        </Link>
                        <Link to={"/edit/" + user._id}>
                          <button className="main-list__action-button-edit-mobile main-list__hide-mobile">
                            <motion.img
                              whileHover={{
                                scale: 1.4,
                                textShadow: "0 0 8px rgb(0,0,0)",
                              }}
                              transition={{ type: "spring", stiffness: 1000 }}
                              className="main-list__action-edit-mobile"
                              src={Edit}
                              alt="Edit"
                            />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <hr className="main-list__bottom-hr-mobile main-list__hide-mobile" />
                  </div>
                </motion.div>

                <motion.div
                  className="main-list__result-container main-list__hide-tabdesk"
                  whileHover={{
                    textShadow: "0 0 8px rgb(255,255,255)",
                    scale: 1.02,
                    duration: 1,
                  }}
                >
                  <div className="main-list__username-result-container">
                    <p className="main-list__username-result main-list__hide-tabdesk">
                      {user.username}
                    </p>
                  </div>
                  <div className="main-list__description-result-container">
                    <p className="main-list__description-result main-list__hide-tabdesk">
                      {user.description}
                    </p>
                  </div>
                  <div className="main-list__duration-result-container">
                    <p className="main-list__duration-result main-list__hide-tabdesk">
                      {user.duration}
                    </p>
                  </div>
                  <div className="main-list__date-result-container">
                    <p className="main-list__date-result main-list__hide-tabdesk">
                      {user.date.substring(0, 10)}
                    </p>
                  </div>
                  <div className="main-list__action-result-container">
                    <Link
                      to="#"
                      onClick={() => {
                        this.deleteWorkout(user._id);
                      }}
                    >
                      <button className="main-list__action-button-delete main-list__hide-tabdesk">
                        <motion.img
                          whileHover={{
                            scale: 1.4,
                            textShadow: "0 0 8px rgb(0,0,0)",
                          }}
                          transition={{ type: "spring", stiffness: 1000 }}
                          className="main-list__action-delete"
                          src={Delete}
                          alt="Delete"
                        />
                      </button>
                    </Link>
                    <Link to={"/edit/" + user._id}>
                      <button className="main-list__action-button-edit main-list__hide-tabdesk">
                        <motion.img
                          whileHover={{
                            scale: 1.4,
                            textShadow: "0 0 8px rgb(0,0,0)",
                          }}
                          transition={{ type: "spring", stiffness: 1000 }}
                          className="main-list__action-edit"
                          src={Edit}
                          alt="Edit"
                        />
                      </button>
                    </Link>
                  </div>
                </motion.div>
                <hr className="main-list__result-hr main-list__hide-tabdesk" />
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    );
  }
}

export default WorkoutList;
