import React from "react";
import data from "../tempData"

const Employees = () => {
 
 console.log(data);
  return (
    <div className="employeeList">
      <h3 className="main-heading">Employees list</h3>
      <div className="addbtn">Add Employee</div>
      <section className="employee-table">
        <table className="table">
          <thead className="tablehead">
            <tr className="tbrw">
              <th className="tbhd">Employee First name</th>
              <th className="tbhd">Employee Last name</th>
              <th className="tbhd">Employee Email Id</th>
              <th className="tbhd">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td className="tbtd">firstlist</td>
              <td className="tbtd">secondlist</td>
              <td className="tbtd">thirdlist</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Employees;
