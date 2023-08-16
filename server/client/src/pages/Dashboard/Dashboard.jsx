import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './dashboard.scss';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  console.log(userInfo);

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <section className="dashboard__parent-section">
        <div className="dashboard__middle-section">
          <div className="dashboard__top-container">
            <section className="dashboard__card-left"></section>
            <section className="dashboard__card-center"></section>
            <section className="dashboard__card-right"></section>
          </div>
        </div>
        <div className="dashboard__right-section">
          <div>
            <p>right section</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Dashboard };
