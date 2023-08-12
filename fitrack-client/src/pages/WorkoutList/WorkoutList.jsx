import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { timeConvert } from '../../helpers/convertTime';
import axios from 'axios';
import Delete from '../../assets/icons/delete.svg';
import Edit from '../../assets/icons/edit.svg';
import './workoutList.scss';
import Modal from '../../Components/Modal/Modal';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const [modalState, setModalState] = useState({
    state: false,
    id: null,
    username: '',
  });

  useEffect(() => {
    axios
      .get('/api/workouts')
      .then((res) => {
        setWorkouts(res.data.workouts);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteWorkout = (id) => {
    const deleteWorkoutPromise = axios
      .delete(`/api/workouts/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
    setWorkouts(workouts.filter((element) => element._id !== id));

    toast.promise(
      deleteWorkoutPromise,
      {
        loading: 'Processing',
        error: 'error deleting a workout',
        success: 'successfully deleted a workout',
      },
      {
        style: {
          minWidth: '250px',
          background: 'rgba(255,255,255,0.4)',
          backdropFilter: 'blur(6px)',
          color: '#000000',
        },
        success: {
          duration: 5000,
        },
        error: {
          duration: 5000,
        },
      }
    );
  };

  // Framer motion animations
  const cardVariants = {
    initial: {
      opacity: 0,
      x: '-500vw',
      scale: 0,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: '500vw',
      scale: 0,
    },
  };
  // Framer motion animations
  const cardTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8,
  };

  return (
    <div className="main-list">
      <Toaster position="bottom-right" />
      {modalState.state === true && modalState.id.length > 0 ? (
        <Modal
          deleteWorkout={deleteWorkout}
          setModalState={setModalState}
          modalState={modalState}
        />
      ) : null}
      <motion.div
        className="main-list__card"
        initial="initial"
        animate="in"
        exit="out"
        variants={cardVariants}
        transition={cardTransition}
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

        {workouts.length === 0 ? (
          <p style={{ fontFamily: 'MontserratSB' }}>
            No workouts added , try adding a workout
          </p>
        ) : (
          workouts.map((user) => {
            return (
              <div key={user._id}>
                {/* mobile and tablet Workout List */}
                <motion.div
                  className="main-list__result-container-mobile main-list__hide-mobile"
                  // whileHover={{
                  //   scale: 1.02,
                  // }}
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
                        <Link to={'/edit/' + user._id}>
                          <button className="main-list__action-button-edit-mobile main-list__hide-mobile">
                            <motion.img
                              whileHover={{
                                scale: 1.4,
                              }}
                              transition={{ type: 'spring', stiffness: 1000 }}
                              className="main-list__action-edit-mobile"
                              src={Edit}
                              alt="Edit"
                            />
                          </button>
                        </Link>
                        <Link to="#">
                          <button
                            className="main-list__action-button-delete-mobile main-list__hide-mobile"
                            onClick={(e) => {
                              e.preventDefault();
                              setModalState({
                                state: true,
                                id: user._id,
                                username: user.username,
                              });
                            }}
                          >
                            <motion.img
                              whileHover={{
                                scale: 1.4,
                              }}
                              transition={{ type: 'spring', stiffness: 1000 }}
                              className="main-list__action-delete-mobile"
                              src={Delete}
                              alt="Delete"
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

                {/* Desktop Workout List */}
                <motion.div
                  className="main-list__result-container main-list__hide-tabdesk"
                  // whileHover={{
                  //   scale: 1.02,
                  //   duration: 1,
                  // }}
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
                      {timeConvert(user.duration)}
                    </p>
                  </div>
                  <div className="main-list__date-result-container">
                    <p className="main-list__date-result main-list__hide-tabdesk">
                      {user.date.substring(0, 10)}
                    </p>
                  </div>
                  <div className="main-list__action-result-container">
                    <Link to={'/edit/' + user._id}>
                      <button className="main-list__action-button-edit main-list__hide-tabdesk">
                        <motion.img
                          whileHover={{
                            scale: 1.4,
                          }}
                          transition={{ type: 'spring', stiffness: 1000 }}
                          className="main-list__action-edit"
                          src={Edit}
                          alt="Edit"
                        />
                      </button>
                    </Link>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setModalState({
                          state: true,
                          id: user._id,
                          username: user.username,
                        });
                      }}
                    >
                      <button className="main-list__action-button-delete main-list__hide-tabdesk">
                        <motion.img
                          whileHover={{
                            scale: 1.4,
                          }}
                          transition={{ type: 'spring', stiffness: 1000 }}
                          className="main-list__action-delete"
                          src={Delete}
                          alt="Delete"
                        />
                      </button>
                    </Link>
                  </div>
                </motion.div>
                <hr className="main-list__result-hr main-list__hide-tabdesk" />
              </div>
            );
          })
        )}
      </motion.div>
    </div>
  );
};

export { WorkoutList };
