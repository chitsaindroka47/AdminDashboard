import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdTableChart,
  MdCalendarToday,
  MdBarChart,
  MdViewKanban,
  MdMenu,
  MdClose,
} from "react-icons/md";
import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <>
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <h2 className="logo">{collapsed ? "" : "AdminPanel"}</h2>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {collapsed ? <MdMenu size={24} /> : <MdClose size={24} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" className="nav-item">
            <MdDashboard size={22} />
            {!collapsed && <span>Dashboard</span>}
          </NavLink>
          <NavLink to="/tables" className="nav-item">
            <MdTableChart size={22} />
            {!collapsed && <span>Tables</span>}
          </NavLink>
          <NavLink to="/calendar" className="nav-item">
            <MdCalendarToday size={22} />
            {!collapsed && <span>Calendar</span>}
          </NavLink>
          <NavLink to="/charts" className="nav-item">
            <MdBarChart size={22} />
            {!collapsed && <span>Charts</span>}
          </NavLink>
          <NavLink to="/kanban" className="nav-item">
            <MdViewKanban size={22} />
            {!collapsed && <span>Kanban</span>}
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
