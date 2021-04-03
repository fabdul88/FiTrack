import React from "react";
import "./pageNotFound.scss";
import Error from "../../assets/errorImage/error.png";

export default function NotFoundPage() {
  return (
    <>
      <div className="error">
        <h1 className="error__text">404 PAGE NOT FOUND !</h1>
      </div>
      <div className="error">
        <img className="error__image" src={Error} alt="Page Not Found" />
      </div>
    </>
  );
}
