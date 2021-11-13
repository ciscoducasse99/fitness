import "../App.css";
import "../styles/dashboard.scss";
import React, { useContext, useState } from "react";
import Calandar from "../components/dashboard/Calandar";
import { useHistory } from "react-router-dom";
import { authContext } from "../auth-context/authContext";
import { Link } from "react-router-dom";
import { handleAdminLogout } from "../api/admin-auth";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AlertTab from "../components/dashboard/AlertTab";
import DashboardNav from "../components/dashboard/Dashboard-Nav";

// sm-110, med-160, lg-250

const Dashboard = () => {
  const { user, logout } = useContext(authContext);
  const [date, setDate] = useState(new Date());

  let history = useHistory();

  const handleAuthLogout = async (e) => {
    e.preventDefault();
    const checkLogoutStatus = await handleAdminLogout();

    if (checkLogoutStatus.status === 200) {
      logout(() => {
        history.replace("/");
      });
    }
  };

  return (
    <div className="App container">
      <DashboardNav user={user} handleAuthLogout={handleAuthLogout} />
      <div className="row no-gutters">
        <div className="col-lg-2 border">
          <AlertTab />
        </div>
        <div className="col-lg-8">
          <Calandar />

          <p>Remember to use skeletons loading for components with data</p>
          <Link to="/">Home</Link>
        </div>
        <div className="col-lg-2 p-0">
          <Calendar
            onChange={(setDate, () => console.log("date has been changed"))}
            value={date}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
