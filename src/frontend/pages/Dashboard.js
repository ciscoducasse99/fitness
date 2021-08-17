import "../App.css";
import "../styles/dashboard.scss";
import React from "react";
import Calandar from "../components/dashboard/Calandar";
const Dashboard = () => {
  // sm-110, med-160, lg-250

  return (
    <div className="App container">
      <nav className="nav">
        <a href="/">Home</a>
      </nav>
      <Calandar />
    </div>
  );
};

export default Dashboard;
