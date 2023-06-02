import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";
import Signage from "./Sign";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <section className="nav-logo">
        {" "}
        <Signage />
        <h1 className="nav-bar-heading">Selfact</h1>
      </section>

      <div className="nav-links">
        {/** 
        <NavLink
          to="/messages"
          style={({isActive }) => {
            return { color: isActive? "red" : "yellow" };
          }}
        >Messages</NavLink>
         */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "all-link active-link" : "all-link link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "all-link active-link" : "all-link link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "all-link active-link" : "all-link link"
          }
        >
          Blog
        </NavLink>
      </div>
      {/**

      <div className="account-link">
        <span>
    
          <h3>Account </h3> <BsFillCaretDownFill style={{ color: "white"}} />
        </span>

        <ul className="ul">
          <li>
            <NavLink to="/sign-up" className="link">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="link">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/demo" className="link">
              Demo Account
            </NavLink>
          </li>
        </ul>
        
      </div>
       */}
      <section className="account-section">
        <NavLink to="/login" className="link section-link login">
          Login
        </NavLink>
        <NavLink to="/signup" className="link section-link">
          Sign Up
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
