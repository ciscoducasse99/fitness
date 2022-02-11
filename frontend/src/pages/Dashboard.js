import "../App.css";
import "../styles/dashboard.scss";
import React, { useEffect, useState } from "react";
import Calandar from "../components/dashboard/Calandar";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";
import { handleAdminLogout } from "../api/admin-auth";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ActivityTab from "../components/dashboard/ActivityTab";
import Sidebar from "../components/dashboard/Sidebar";
import Div100vh from "react-div-100vh";
import Stats from "../components/dashboard/Stats";

// sm-110, med-160, lg-250

// Components to add

// -Payment card (upcoming payments, past due, successful, etc)
// -side nav that has logos and headers, once clicked, goes to tab that displays more information
//     (https://themes.getbootstrap.com/preview/?theme_id=28117 | calendar tab)

// consider changing this as a component so I can use state

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - Coach Chris";
  }, []);

  const { user, logout } = useGlobalContext();
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
    <Div100vh className="bg-light d-flex flex-row">
      <Sidebar active={"Home"} />
      <main className="container-fluid">
        <div className="d-flex flex-row align-items-start justify-content-between my-3 text-center border-bottom">
          <h6>Top Navbar</h6>
          <div className="d-flex flex-row">
            <i className="bi bi-app-indicator mx-2 rounded-circle bg-white" />
            <i
              onClick={(e) => handleAuthLogout(e)}
              className="bi bi-box-arrow-right mx-2 rounded-circle bg-white"
            />
          </div>
        </div>
        <Stats />
        <div className="row mx-2">
          <div className="col-lg-4 p-0 mr-auto ">
            <ActivityTab />
          </div>
          <div className="col-lg-6 mx-auto border">
            {/* <Calandar /> */}

            <p>Remember to use skeletons loading for components with data</p>
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="col p-0">
          <Calendar
            onChange={(setDate, () => console.log("date has been changed"))}
            value={date}
          />
        </div>
        <div className="col mt-0 pt-0">
          <Calandar />
        </div>
      </main>
    </Div100vh>
  );
};

export default Dashboard;
