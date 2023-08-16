import React from 'react';
import './fallbackUI.scss';

const FallbackUI = () => {
  return (
    <div className="fallback">
      <h1 className="fallback__text">Loading...</h1>
      <div className="fallback__bar-animation-container">
        <div className="fallback__bar-animation-container-div fallback__bar-animation-container-div-one"></div>
        <div className="fallback__bar-animation-container-div fallback__bar-animation-container-div-two"></div>
        <div className="fallback__bar-animation-container-div fallback__bar-animation-container-div-three"></div>
      </div>
    </div>
  );
};

export default FallbackUI;
