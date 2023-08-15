import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './landing.scss';

const Landing = () => {
  // wger workout API
  // useEffect(() => {
  //   // fetch('https://wger.de/api/v2/workoutlog/', {
  //   //   method: 'GET',
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //     Authorization: 'Token af5ebdb8746c476dc68a892e28618677e3c73195',
  //   //     // credentials: { username: 'faz', password: 'Kukks123' },
  //   //     // Authorization: 'Basic' + btoa('faz:Kukks123'),
  //   //     // Authorization: `Basic ${btoa('faz:Kukks123')}`,
  //   //   },
  //   // })
  //   //   .then((res) => {
  //   //     return res.json();
  //   //   })
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //   });
  //   // =================
  //   // fetch(' https://wger.de/api/v2/exercise/')
  //   //   .then((response) => response.json())
  //   //   .then((data) => console.log(data));
  //   // ==============
  //   // fetch('https://wger.de/api/v2/exercise/?category=11')
  //   //   .then((response) => response.json())
  //   //   .then((data) => console.log(data));
  //   // ============
  //   fetch('https://wger.de/api/v2/exerciseinfo/?limit=1200')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       const res = data.results.filter((exercise) => {
  //         // extract only those which have images and are in english
  //         return exercise.language.id === 2 && exercise.images.length !== 0;
  //       });
  //       console.log(res);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  const navigate = useNavigate();
  const descriptionVariants = {
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: '-100vh',
      scale: 0,
    },
  };

  const descriptionTransition = {
    duration: 2,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const buttonVariants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '-500vw',
    },
  };
  const buttonTransition = {
    type: 'spring',
    stiffness: 50,
    duration: 1,
  };
  return (
    <div className="landing-container">
      <div className="landing-container__title-container">
        <h1 className="landing-container__title">FiTrack</h1>
        <motion.p
          className="landing-container__slogan"
          initial="out"
          animate="in"
          exit="out"
          variants={descriptionVariants}
          transition={descriptionTransition}
        >
          Helping you achieve{' '}
          <span className="landing-container__slogan-span">fitness goals</span>{' '}
          that you define
        </motion.p>
        <div className="landing-container__button-container">
          <motion.button
            className="landing-container__button"
            initial="out"
            animate="in"
            exit="out"
            name="GET STARTED"
            variants={buttonVariants}
            transition={buttonTransition}
            whileHover={{
              textShadow: '0 0 8px rgb(255,255,255)',
            }}
            onClick={(e) => {
              e.preventDefault();
              navigate('/createuser');
            }}
          >
            GET STARTED
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export { Landing };
