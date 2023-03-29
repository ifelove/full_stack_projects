import React from "react";
import { useGlobalContex } from "../contex";

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
          <h3>Employees</h3>
        </div>
        <div className="links">
          <h3>Add Employee</h3>
        </div>
      </section>
    </div>
  );
};

export default Header;
