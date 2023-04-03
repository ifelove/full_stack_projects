import React from "react";
import { useParams } from "react-router-dom"
import { getEmployeeById } from "../Service/EmployeeService";

const UpdateEmployee = () => {
  const empId = useParams();
  // console.log()
  console.log("empid=" + empId.id);
  getEmployeeById(empId.id).then((res)=>{
    console.log(res)
  })

  return <div>Update</div>;
};

export default UpdateEmployee;
