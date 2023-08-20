import React, { useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetSingleWorkoutQuery,
  useEditWorkoutMutation,
} from '../../slices/workoutsApiSlice';
import toast, { Toaster } from 'react-hot-toast';
import { date2str } from '../../helpers/date2srt';
import { motion } from 'framer-motion';
import './editWorkout.scss';

const EditWorkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isFetching, isLoading, isError } = useGetSingleWorkoutQuery(id);
  const [editWorkout] = useEditWorkoutMutation();
  console.log('GetSingleWorkout RTK Query', data);
  const ACTION = {
    EDIT_WORKOUT_DATA: 'editWorkoutData',
    SET_INPUTS_TO_FETCHED_DATA: 'getFetchedData',
  };

  const initialWorkoutState = {
    username: '',
    description: '',
    duration: 0,
    date: date2str(new Date(), 'yyyy-MM-dd'),
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTION.EDIT_WORKOUT_DATA:
        return { ...state, [action.field]: action.value };
      case ACTION.SET_INPUTS_TO_FETCHED_DATA:
        return action.payload;
      default:
        return { ...initialWorkoutState };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialWorkoutState);

  useEffect(() => {
    if (data) {
      try {
        dispatch({
          type: ACTION.SET_INPUTS_TO_FETCHED_DATA,
          payload: {
            ...initialWorkoutState,
            username: data.username,
            description: data.description,
            duration: data.duration,
            date: date2str(new Date(data.date), 'yyyy-MM-dd'),
          },
        });
      } catch (err) {
        console.error(err);
      }
    }
  }, [data]);

  const updateInputValue = (event) => {
    dispatch({
      type: ACTION.EDIT_WORKOUT_DATA,
      field: event.target.name,
      value: event.target.value,
    });
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await editWorkout({
        id: id,
        username: state.username,
        description: state.description,
        duration: state.duration,
        date: state.date,
      }).unwrap();
      toast.success('Successfully edited a workout!');
      navigate({
        pathname: '/workoutlist',
        state: { username: state.username },
      });
    } catch (err) {
      console.error(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }

    // const editWorkoutPromise = axios
    //   .patch(`/api/workouts/update/${params.id}`, workout)
    //   .then((res) => {
    //     navigate({
    //       pathname: '/workoutlist',
    //       state: { username: state.username },
    //     });
    //     return res.data;
    //   })
    //   .catch((err) => {
    //     throw new Error(err);
    //   });

    // toast.promise(
    //   editWorkoutPromise,
    //   {
    //     loading: 'Processing',
    //     error: 'error editing a workout',
    //     success: 'Successfully edited a workout',
    //   },
    //   {
    //     style: {
    //       minWidth: '250px',
    //       background: 'rgba(255,255,255,0.4)',
    //       backdropFilter: 'blur(6px)',
    //       color: '#000000',
    //     },
    //     success: {
    //       duration: 5000,
    //     },
    //     error: {
    //       duration: 5000,
    //     },
    //   }
    // );
  }

  // Framer motion animations
  const cardVariants = {
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: '-500vh',
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
    <div className="edit-container">
      <Toaster position="bottom-right" />
      <motion.div
        className="edit-container__card"
        initial="out"
        animate="in"
        exit="out"
        variants={cardVariants}
        transition={cardTransition}
      >
        <div className="edit-container__title-container">
          <h2 className="edit-container__title">EDIT WORKOUT</h2>
        </div>
        <div className="edit-container__form-container">
          <form onSubmit={onSubmit} className="edit-container__form">
            <div className="edit-container__username-container">
              <label
                className="edit-container__username-label"
                htmlFor="username"
              >
                USERNAME
              </label>
              <input
                type="text"
                name="username"
                value={state.username}
                id="username"
                className="edit-container__username"
                disabled={state.username.length > 0 ? true : false}
                onChange={(event) => updateInputValue(event)}
              />
            </div>
            <div className="edit-container__description-container">
              <label
                className="edit-container__description-label"
                htmlFor="description"
              >
                DESCRIPTION
              </label>
              <textarea
                id="description"
                className="edit-container__description"
                name="description"
                value={state.description}
                onChange={(event) => updateInputValue(event)}
                placeholder="Ex. Walk, Stretch, Weight lift..."
              />
            </div>
            <div className="edit-container__duration-container">
              <label
                className="edit-container__duration-label"
                htmlFor="duration"
              >
                DURATION (In Mins)
              </label>
              <input
                id="duration"
                className="edit-container__duration"
                name="duration"
                type="number"
                min="0"
                value={state.duration}
                onChange={(event) => updateInputValue(event)}
              />
            </div>
            <div className="edit-container__date-container">
              <label className="edit-container__date-label" htmlFor="date">
                DATE
              </label>
              <input
                id="date"
                className="edit-container__date"
                name="date"
                type="date"
                selected={state.date}
                value={state.date}
                min={date2str(new Date(), 'yyyy-MM-dd')}
                onChange={(event) => updateInputValue(event)}
              />
            </div>
            <div className="edit-container__button-container">
              <button className="edit-container__button">UPDATE !</button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export { EditWorkout };
