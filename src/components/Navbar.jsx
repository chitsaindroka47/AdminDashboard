import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import {
  MdOutlineWbSunny,
  MdDarkMode,
  MdLogout,
  MdSettings,
  MdPerson,
  MdKeyboardArrowDown
} from "react-icons/md";

const Navbar = ({ title = "Celebel Technologies", isDarkMode, toggleTheme }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-title">{title}</div>
      <div className="navbar-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDarkMode ? <MdOutlineWbSunny size={22} /> : <MdDarkMode size={22} />}
        </button>
        <div className="navbar-profile" ref={dropdownRef} onClick={() => setDropdownOpen(!dropdownOpen)}>
          <img src="https://i.pravatar.cc/40" alt="user avatar" className="navbar-avatar" />
          <span className="navbar-username">Admin-CHITRANJAN</span>
          <MdKeyboardArrowDown
            className={`navbar-dropdown-icon ${dropdownOpen ? 'rotate' : ''}`}
          />

          {dropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item">
                <MdPerson className="dropdown-icon" /> Profile
              </button>
              <button className="dropdown-item">
                <MdSettings className="dropdown-icon" /> Settings
              </button>
              <button className="dropdown-item logout">
                <MdLogout className="dropdown-icon" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
