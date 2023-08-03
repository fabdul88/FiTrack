import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import axios from 'axios';
import './createUser.scss';

const CreateUser = () => {
  const [userName, setUserName] = useState('');
  let navigate = useNavigate();

  function onChangeUsername(e) {
    setUserName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: userName,
    };

    const createUserPromise = axios
      .post('/api/users/add', user)
      .then((res) => {
        navigate('/createworkout', { state: user });
        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });

    toast.promise(
      createUserPromise,
      {
        loading: 'Processing',
        error: 'error adding a user',
        success: 'successfully added a username ',
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
    <div className="user-container">
      <Toaster position="bottom-right" />
      <motion.div
        className="user-container__card"
        initial="initial"
        animate="in"
        exit="out"
        variants={cardVariants}
        transition={cardTransition}
      >
        <div className="user-container__title-container">
          <h2 className="user-container__title">CREATE USER </h2>
        </div>
        <div className="user-container__form-container">
          <div className="user-container__image"></div>
          <form
            className="user-container__form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="user-container__username-container">
              <label
                className="user-container__username-label"
                htmlFor="username"
              >
                USERNAME
              </label>
              <input
                id="username"
                name="userName"
                className="user-container__user"
                type="text"
                value={userName}
                onChange={onChangeUsername}
                placeholder="Ex. John Doe"
              />
            </div>
            <div className="user-container__button-container">
              <button className="user-container__button" name="create">
                CREATE
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export { CreateUser };
