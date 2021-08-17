import "../App.css";
import "../styles/dashboard.scss";
import React, { useState, useEffect } from "react";
import Calandar from "../components/dashboard/Calandar";
import axios from "axios";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = "Dashboard - Coach Chris";
  }, []);

  useEffect(() => {
    try {
      axios.get("/api/dashboard").then((result) => {
        setTitle(result.data);
      });
    } catch (err) {
      console.log(err);
    }
  });
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
