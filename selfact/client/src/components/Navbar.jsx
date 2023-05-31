import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h2>SelfAct</h2>
      <div nav-links>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            isActive ? "active-link" : "link";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            isActive ? "active-link" : "link";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            isActive ? "active-link" : "link";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            isActive ? "active-link" : "link";
          }}
        >
          Home
        </NavLink>
      </div>
    </nav>
  );
};
