import React from "react";
import data from "../tempData";

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
            {data.map((user) => {
              const { Firstname, Lastname, Email,id } = user;
              console.log(user)
              return (
                <tr className="row" key={id}>
                  <td className="tbtd">{Firstname}</td>
                  <td className="tbtd">{Lastname}</td>
                  <td className="tbtd">{Email}</td>
                  <td className="tbtd">
                    <section className="inlineBtn">
                      <button className="btnEdit">Edit</button>
                      <span>
                        <button className="btnDelete">Delete</button>
                      </span>
                    </section>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Employees;
