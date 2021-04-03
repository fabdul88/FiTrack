import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./landing.scss";

export default function Hero() {
  const descriptionVariants = {
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: "-100vh",
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
      x: "-500vw",
    },
  };
  const buttonTransition = {
    type: "spring",
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
          Helping you achieve{" "}
          <span className="landing-container__slogan-span">fitness goals</span>{" "}
          that you define
        </motion.p>
        <div className="landing-container__button-container">
          <Link to="/createuser" className="landing-container__button-link">
            <motion.button
              className="landing-container__button"
              initial="out"
              animate="in"
              exit="out"
              variants={buttonVariants}
              transition={buttonTransition}
              whileHover={{
                textShadow: "0 0 8px rgb(255,255,255)",
              }}
            >
              GET STARTED
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
