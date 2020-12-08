import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/stopwatch.svg";
import "./navigation.scss";

export default function Navigation() {
  return (
    <div className="nav-container">
      <nav className="nav-container__nav">
        <div className="nav-container__logo-container">
          <Link to="/" className="nav-container__logo-link">
            <img className="nav-container__logo" src={Logo} alt="Brain Logo" />
            <p className="nav-container__logo-name">FiTrack</p>
          </Link>
        </div>
        <div className="nav-container__list-container">
          <ul className="nav-container__list">
            <Link to="/workoutlist" className="nav-container__list-item-link">
              <motion.li
                className="nav-container__list-item"
                whileHover={{
                  scale: 1.5,
                  textShadow: "0 0 8px rgb(82,190,128)",
                  color: "#239B56",
                }}
              >
                List
              </motion.li>
            </Link>
            <Link to="/createworkout" className="nav-container__list-item-link">
              <motion.li
                className="nav-container__list-item"
                whileHover={{
                  scale: 1.5,
                  textShadow: "0 0 8px rgb(82,190,128)",
                  color: "#239B56",
                }}
              >
                Workout
              </motion.li>
            </Link>
            <Link to="/createuser" className="nav-container__list-item-link">
              <motion.li
                className="nav-container__list-item"
                whileHover={{
                  scale: 1.5,
                  textShadow: "0 0 8px rgb(82,190,128)",
                  color: "#239B56",
                }}
              >
                User
              </motion.li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
