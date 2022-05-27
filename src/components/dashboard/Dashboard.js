import React, { useEffect } from "react";
import DashboardActions from "./DashboardActions";

const Dashboard = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome User
        <DashboardActions />
        <div className="my-2">
          <button className="btn btn-danger">
            <i className="fas fa-user-minus" /> Delete My Account
          </button>
        </div>
      </p>
    </section>
  );
};

export default Dashboard;
