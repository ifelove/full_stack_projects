import React from "react";
import { useGlobalContex } from "../contex";


const Form = () => {
  //const {firstname}=useGlobalContex()
 // console.log(useGlobalContex())

  return (
    <div className="main-card-body">
      <div className="formheading">
        <h3>Add Employee</h3>
      </div>
      <div className="form-body">
        <form action="">
          <section className="input1">
            <label htmlFor="First Name">First Name:</label>
            <input type="text" name="" placeholder="First Name" />
          </section>
          <section className="input1">
            <label htmlFor="First Name">First Name:</label>
            <input type="text" name="" placeholder="First Name" />
          </section>
          <section className="input1">
            <label htmlFor="First Name">First Name:</label>
            <input type="text" name="" placeholder="First Name" />
          </section>
          <section className="input1">
            <label htmlFor="First Name">First Name:</label>
            <input type="text" name="" placeholder="First Name" />
          </section>
        </form>
      </div>
    </div>
  );
};

export default Form;
