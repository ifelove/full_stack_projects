import React from "react";
import { useGlobalContex } from "../contex";
import { createEmployee } from "../Service/EmployeeService";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import "../index.css";

const Form = () => {
  const navigate = useNavigate();
  const { firstname, lastname, email, setFirstname, setLastname, setEmail } =
    useGlobalContex();
  // console.log(useGlobalContex())
  // const firtsNameHandler = (e) => {
  // e.preventDefault()
  // console.log(e.target.value)
  //  setFirstname(e.target.value);
  //  console.log(firstname);
  // };
  //const lastNameHandler = (e) => {};
  // const emailHandler = (e) => {};
  React.useEffect(() => {
    setFirstname(firstname);
  }, [firstname, lastname]);

  const saveHandler = (e) => {
    e.preventDefault();
    //console.log("save");
    //console.log(firstname);
    // console.log(lastname);
    // console.log(email);
    let employee = { name: firstname }; //, lastname: lastname, email: email };
    console.log("employee=>" + JSON.stringify(employee));
    createEmployee(employee).then((res) => {});
    setFirstname("");
    setLastname("");
    setEmail("");
    navigate("/");
  };
  const cancelHandler = () => {
    navigate("/");
    setFirstname("");
    setLastname("");
    setEmail("");
    console.log("cancel");
  };

  return (
    <div className="main-card-body">
      <div className="formheading">
        <h3>Add Employee</h3>
      </div>
      <div className="form-body">
        <form action="">
          <section className="input">
            <label htmlFor="First Name">First Name:</label>
            <input
              className="input-tag"
              type="text"
              name="first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
            />
          </section>
          <section className="input">
            <label htmlFor="Last Name">Last Name:</label>
            <input
              className="input-tag"
              type="text"
              name="last name"
              value={lastname}
              placeholder="Last Name"
              onChange={(e) => setLastname(e.target.value)}
            />
          </section>
          <section className="input">
            <label htmlFor="email">Email Address:</label>
            <input
              className="input-tag"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="formbtn">
              <button className="saveBtn" onClick={saveHandler}>
                Save
              </button>
              <span>
                <button className="cancelBtn" onClick={cancelHandler}>
                  Cancel
                </button>
              </span>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Form;
