import React from "react";
import "../../styles/dashboard.scss";
import { NavLink, NavItem, Nav } from "reactstrap";
// import cx from "classNames";

const Sidebar = ({ active }) => {
  const links = [
    { linkName: "Home", icon: " bi-house-door" },
    { linkName: "Statistics", icon: " bi-bar-chart" },
    { linkName: "Products", icon: " bi-bag-dash" },
    { linkName: "Calendar", icon: " bi-calendar4-week" },
    { linkName: "Forms", icon: "bi-file-earmark-text" },
    { linkName: "Clients", icon: " bi-people" },
  ];
  //*d-sm-none

  return (
    <aside className="sidebar justify-content-between align-items-center">
      <Nav pills vertical className="text-center">
        {links.map((link) => (
          <NavItem>
            <NavLink active={active === link.linkName} href="#">
              <i className={`bi bi-lg ${link.icon}`} />
              <h6 className="small">{link.linkName}</h6>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <div className="text-center">
        <h3 className="sidebar-logo border rounded-3 p-1">CC</h3>
      </div>
    </aside>
  );
};

export default Sidebar;
