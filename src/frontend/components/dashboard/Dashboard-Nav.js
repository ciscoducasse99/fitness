import React from "react";

const DashboardNav = ({ user, handleAuthLogout }) => {
  return (
    <>
      <nav className="nav">
        <button onClick={(e) => handleAuthLogout(e)}>signout</button>

        <button
          onClick={() => {
            console.log("get user info");
          }}
        >
          Get User
        </button>
      </nav>
      <p>hello {user}</p>
    </>
  );
};

export default DashboardNav;
