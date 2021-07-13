import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navigationData } from "./navigationData";
import Logo from "../../assets/logo/stopwatch.svg";
import "./navigation.scss";
import burger from "../../assets/icons/burger.svg";
import close from "../../assets/icons/close.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const burgerStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <nav className="nav-container__nav">
        <div className="nav-container__logo-container">
          <Link to="/" className="nav-container__logo-link">
            <img className="nav-container__logo" src={Logo} alt="Brain Logo" />
            <p className="nav-container__logo-name">FiTrack</p>
          </Link>
        </div>
        <div className="nav-container__burger-container">
          <img
            className={
              isOpen ? "nav-container__burger-hide" : "nav-container__burger"
            }
            src={burger}
            alt=""
            onClick={() => {
              burgerStatus() &&
                document.getElementsByClassName("nav-container__burger-hide");
            }}
          />
        </div>
        <div
          className={
            isOpen
              ? "nav-container__list-container"
              : "nav-container__list-container-hide"
          }
        >
          <ul className="nav-container__list">
            {navigationData.map((nav) => {
              return (
                <NavLink
                  key={nav.id}
                  to={nav.url}
                  className="nav-container__list-item-link"
                  activeStyle={{
                    color: `#239B56`,
                    textShadow: `0 0 8px rgb(82,190,128)`,
                    
                  }}
                >
                  <li
                    className="nav-container__list-item"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {nav.category}
                  </li>
                </NavLink>
              );
            })}
          </ul>
          <div className="nav-container__close-container">
            <img
              className="nav-container__close"
              src={close}
              alt=""
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
