import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pageNotFound.scss';
import Error from '../../assets/errorImage/error.svg';

const PageNotFound = () => {
  let navigate = useNavigate();

  function backToHome(e) {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className="error">
      <h1 className="error__title">404 PAGE NOT FOUND !</h1>
      <p className="error__text">
        Oops! Looks like the page you are trying to access is not available...
      </p>
      <div className="error">
        <img className="error__image" src={Error} alt="Page Not Found" />
      </div>
      <button className="error__button" onClick={backToHome}>
        Back to Home
      </button>
    </div>
  );
};

export { PageNotFound };
