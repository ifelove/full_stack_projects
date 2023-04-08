import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, UpdateEmployee } from "../Service/EmployeeService";
import { useGlobalContex } from "../contex";

const UpdateEmployeeComponent = () => {
  const navigate = useNavigate();
  const {
    setSingleEmployee,
    singleEmployee,
    firstname,
    lastname,
    email,
    setFirstname,
    setLastname,
    setEmail,
  } = useGlobalContex();
  const empId = useParams();
  // console.log()
  // console.log("empid=" + empId.id);
  React.useEffect(() => {
    getEmployeeById(empId.id).then((res) => {
      //console.log(res.data.item.name);
      const employee = res.data.employee;
      console.log(employee);
      const { _id, firstname, lastname, email } = employee;
      setSingleEmployee({ employee });
      setFirstname(firstname);
      setLastname(lastname);
      setEmail(email);
    });
  }, [empId.id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    //console.log(empId.id);

    let employee = { firstname: firstname, lastname: lastname, email: email }; //, lastname: lastname, email: email };

    //  console.log("employee=>" + JSON.stringify(employee));
    UpdateEmployee(empId.id, employee).catch((error) => {
      console.log(error);
    });
    // console.log(employee);
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
    <div>
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
                <button className="saveBtn" onClick={updateEmployee}>
                  Update
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
    </div>
  );
};

export default UpdateEmployeeComponent;
