//import {createBrowserHistory} from 'history';
//export default createBrowserHistory();

import React, { Component } from "react";
import data from "../tempData";

import { Link, useNavigate } from "react-router-dom";

import { useGlobalContex } from "../contex";
import { getEmployees, deleteEmployee } from "../Service/EmployeeService";

//const url = "http://localhost:5000/api/vi/employees";

const Employees = () => {
  
  
  
  const navigate = useNavigate();
  const { employees, setEmpolyees, firstname, lastname } = useGlobalContex();

  getEmployees()
    .then((res) => {
      const data = res.data;
     // console.log(data.employees);
      setEmpolyees(res.data.employees);
      // console.log("this is new item", employees);
    })
    .catch((error) => console.log(error)); //.then((res)=>{console.log(res.data.items)})
  //console.log("hello")
  // console.log(employees);

  const addEmployee = () => {
    //console.log("Hello");
  };

  const editEmployee = (id) => {
    navigate(`/update-employee/${id}`);
  };

  const deleteselected = (id) => {
  
    deleteEmployee(id)
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="employeeList">
      <h3 className="main-heading">Employees list</h3>

      <Link to={"/form"}>
        <div className="addbtn">Add Employee</div>
      </Link>

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
            {employees.map((user) => {
              const { firstname, lastname, email, _id } = user;
              //  console.log("the id" + _id);
              return (
                <tr className="row" key={_id}>
                  <td className="tbtd">{firstname}</td>
                  <td className="tbtd">{lastname}</td>
                  <td className="tbtd">{email}</td>
                  <td className="tbtd">
                    <section className="inlineBtn">
                      <button
                        className="btnEdit"
                        onClick={() => editEmployee(_id)}
                      >
                        Update
                      </button>
                      <span>
                        <button className="btnDelete" onClick={()=>deleteselected(_id)}>
                          Delete
                        </button>
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
