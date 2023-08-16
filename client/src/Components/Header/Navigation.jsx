import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { clearCredentials } from '../../slices/authSlice';
import { navigationData } from './navigationData';
import Logo from '../../assets/logo/stopwatch.svg';
import './navigation.scss';
import burger from '../../assets/icons/menu.svg';
import close from '../../assets/icons/closeMenu.svg';
import chevron from '../../assets/icons/chevronRight.svg';

export default function Navigation() {
  const { userInfo } = useSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropdown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();

  const burgerStatus = () => {
    setIsOpen((prevState) => !prevState);
  };

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="nav-container">
      <nav className="nav-container__nav">
        <div className="nav-container__logo-burger-container-parent">
          <div className="nav-container__logo-burger-container">
            <div className="nav-container__logo-container">
              <img
                className={
                  isOpen
                    ? 'nav-container__burger-hide'
                    : 'nav-container__burger'
                }
                src={burger}
                alt=""
                onClick={() => {
                  burgerStatus();
                }}
              />
            </div>
            <div className="nav-container__burger-container">
              <Link to="/" className="nav-container__logo-link">
                <img
                  className="nav-container__logo"
                  src={Logo}
                  alt="Brain Logo"
                />
                {isOpen ? (
                  <p className="nav-container__logo-name">FiTrack</p>
                ) : null}
              </Link>
            </div>
          </div>
          {userInfo ? (
            <div className="nav-container__user-container">
              <div className="nav-container__dropdown-container">
                <p className="nav-container__user">
                  {`${userInfo.data.firstname} ${userInfo.data.lastname.charAt(
                    0
                  )}`}
                  <span className="nav-container__user-name-dropdown-span">
                    <img
                      className="nav-container__dropdown-arrow"
                      src={chevron}
                      alt=""
                      onClick={() => {
                        setDropdown((prevState) => !prevState);
                      }}
                    />
                  </span>
                </p>
                {dropDown && (
                  <div className="nav-container__dropdown-list">
                    <p
                      className="nav-container__dropdown-item"
                      onClick={() => {
                        logoutHandler();
                      }}
                    >
                      profile
                    </p>
                    <p
                      className="nav-container__dropdown-item"
                      onClick={() => {
                        logoutHandler();
                      }}
                    >
                      logout
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="nav-container__login-signup-container">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? 'nav-container__login--active'
                    : 'nav-container__login'
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? 'nav-container__signup--active'
                    : 'nav-container__signup'
                }
                to="/signup"
              >
                Signup
              </NavLink>
            </div>
          )}
        </div>

        <div
          className={
            isOpen
              ? 'nav-container__list-container'
              : 'nav-container__list-container-hide'
          }
        >
          <ul className="nav-container__list">
            {navigationData.map((nav) => {
              return (
                <NavLink
                  key={nav.id}
                  to={
                    userInfo !== null && nav.protected === true
                      ? nav.url
                      : userInfo === null && nav.protected === false
                      ? nav.url
                      : '#'
                  }
                  className={(navData) =>
                    navData.isActive
                      ? 'nav-container__list-item-link--active'
                      : 'nav-container__list-item-link'
                  }
                >
                  {userInfo !== null && nav.protected === true ? (
                    <img
                      className="nav-container__list-item-icon"
                      src={nav.icon}
                      alt=""
                    />
                  ) : userInfo === null && nav.protected === false ? (
                    <img
                      className="nav-container__list-item-icon"
                      src={nav.icon}
                      alt=""
                    />
                  ) : null}
                  <li
                    className="nav-container__list-item"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {userInfo !== null && nav.protected === true
                      ? nav.category
                      : userInfo === null && nav.protected === false
                      ? nav.category
                      : null}
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
