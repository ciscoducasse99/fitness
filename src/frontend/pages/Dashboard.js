import "../App.css";
import "../styles/dashboard.scss";
import React, { useState, useEffect } from "react";
//import Calandar from "../components/dashboard/Calandar";
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
    <div className="App">
      <h2>{title}</h2>
      <a
        href="https://www.amazon.com/dp/B06XP7Z1KN?&linkCode=li3&tag=10e872-20&linkId=9887ec307746f3138eddd7927df28442&language=en_US&ref_=as_li_ss_il"
        target="__blank"
        rel="noreferrer"
      >
        <img
          alt="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B06XP7Z1KN&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=10e872-20&language=en_US"
        />
      </a>
    </div>
  );
};

export default Dashboard;
