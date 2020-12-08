import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./hero.scss";

export default function Hero() {
  const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <div className="hero-container">
      <div className="hero-container__title-container">
        <h1 className="hero-container__title">FiTrack</h1>
        <motion.p
          className="hero-container__slogan"
          initial={{ opacity: 0, y: "-100vw" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0, y: "-100vw" }}
          transition={transition}
        >
          Helping you achieve fitness goals that you define
        </motion.p>
        <div className="hero-container__button-container">
          <Link to="/createuser" className="hero-container__button-link">
            <motion.button
              className="hero-container__button"
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
    </div>
  );
}
