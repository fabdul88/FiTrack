import React, { useReducer } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { date2str } from '../../helpers/date2srt';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import axios from 'axios';
import './createWorkout.scss';

const CreateWorkout = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  const navigate = useNavigate();
  const location = useLocation();

  const ACTION = {
    ADD_WORKOUT_DATA: 'addWorkoutData',
    GET_USERNAME: 'getUsername',
  };

  const initialWorkoutState = {
    // username: '' || location?.state?.username,
    username: '' || userInfo?.data?.username,
    description: '',
    duration: 0,
    date: date2str(new Date(), 'yyyy-MM-dd'),
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTION.ADD_WORKOUT_DATA:
        return { ...state, [action.field]: action.value };
      default:
        return { ...initialWorkoutState };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialWorkoutState);

  const updateInputValue = (event) => {
    dispatch({
      type: ACTION.ADD_WORKOUT_DATA,
      field: event.target.name,
      value: event.target.value,
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    const workout = {
      ...state,
    };

    console.log('ADD WORKOUT>>>>', workout);

    const name = {
      username: state.username,
    };

    const addWorkoutPromise = axios
      .post('/api/workouts/add', workout)
      .then((res) => {
        navigate('/workoutlist', { state: { username: name } });
        console.log(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });

    toast.promise(
      addWorkoutPromise,
      {
        loading: 'Processing',
        error: 'error adding a workout',
        success: 'successfully added a workout ',
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
  }

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
    <div className="create-container">
      <Toaster position="bottom-right" />
      <motion.div
        className="create-container__card"
        initial="initial"
        animate="in"
        exit="out"
        variants={cardVariants}
        transition={cardTransition}
      >
        <div className="create-container__title-container">
          <h2 className="create-container__title">CREATE WORKOUT</h2>
        </div>
        <div className="create-container__form-container">
          <form
            onSubmit={onSubmit}
            className="create-container__form"
            action=""
          >
            <div className="create-container__username-container">
              <label
                className="create-container__username-label"
                htmlFor="username"
              >
                USERNAME
              </label>
              <input
                type="text"
                name="userName"
                id="username"
                className="create-container__username"
                value={state?.username}
                // value={userInfo?.data?.username}
                // disabled={state?.username?.length > 0 ? true : false}
                disabled={userInfo?.data?.username?.length > 0 ? true : false}
                // onChange={(event) => updateInputValue(event)}
              />
            </div>
            <div className="create-container__description-container">
              <label
                className="create-container__description-label"
                htmlFor="description"
              >
                DESCRIPTION
              </label>
              <textarea
                id="description"
                name="description"
                className="create-container__description"
                value={state.description}
                onChange={(event) => updateInputValue(event)}
                placeholder="Ex. Walk, Stretch, Weight lift..."
              />
            </div>
            <div className="create-container__duration-container">
              <label
                className="create-container__duration-label"
                htmlFor="duration"
              >
                DURATION (In Mins)
              </label>
              <input
                id="duration"
                name="duration"
                className="create-container__duration"
                type="number"
                min="0"
                value={state.duration}
                onChange={(event) => updateInputValue(event)}
              />
            </div>
            <div className="create-container__date-container">
              <label className="create-container__date-label" htmlFor="date">
                DATE
              </label>
              <input
                id="date"
                name="date"
                className="create-container__date"
                type="date"
                selected={state.date}
                value={state.date}
                min={date2str(new Date(), 'yyyy-MM-dd')}
                onChange={(event) => updateInputValue(event)}
              />
            </div>
            <div className="create-container__button-container">
              <button className="create-container__button" name="let's go">
                LET'S GO !
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export { CreateWorkout };
