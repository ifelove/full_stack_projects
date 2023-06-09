import React from "react";
import { useGlobalContex } from "../contex";
import { NavLink } from "react-router-dom";

const Header = () => {
  //const {firstname}=useGlobalContex()
  //console.log(firstname)
  return (
    <div className="header">
      <div className="title">
        <h3>Employement Management App</h3>
      </div>

      <section className="headerlinks">
        <div className="links">
          <NavLink to={"/"}>
            <h3>Employees</h3>
          </NavLink>
        </div>
        <div className="links">
          <NavLink to={"/form"}>
            <h3>Add Employee</h3>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Header;
