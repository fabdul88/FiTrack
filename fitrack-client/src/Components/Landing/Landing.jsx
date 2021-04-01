import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./landing.scss";

export default function Hero() {
  const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div
      className="landing-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="landing-container__title-container">
        <h1 className="landing-container__title">FiTrack</h1>
        <motion.p
          className="landing-container__slogan"
          initial={{ opacity: 0, y: "-100vw" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0, y: "-100vw" }}
          transition={transition}
        >
          Helping you achieve{" "}
          <span className="landing-container__slogan-span">fitness goals</span>{" "}
          that you define
        </motion.p>
        <div className="landing-container__button-container">
          <Link to="/createuser" className="landing-container__button-link">
            <motion.button
              className="landing-container__button"
              initial={{ opacity: 0, x: "-500vw" }}
              animate={{ opacity: 1, x: "0" }}
              exit={{ opacity: 0, x: "-500vw" }}
              transition={{ type: "spring", stiffness: 50, duration: 1 }}
              whileHover={{
                textShadow: "0 0 8px rgb(255,255,255)",
              }}
            >
              GET STARTED
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
