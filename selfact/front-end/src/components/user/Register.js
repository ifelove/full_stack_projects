import React from "react";
import SmallLogo from "../SmallLogo";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="container">
      <div className="register-container">
        <main className="register-heading">
          <div className="register-logo">
            <SmallLogo />
            <span>Selfact</span>
          </div>
          <h4>Register</h4>
        </main>
        <form className="reg-form">
          <section className="formInput">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" className="inputs" />
          </section>
          <section className="formInput">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" className="inputs" />
          </section>
          <section className="formInput">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="inputs" />
          </section>
          <section className="formInput">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="inputs" />
          </section>
          <section className="formInput">
            <label htmlFor="password2"> Confirm Password</label>
            <input type="password" name="password2" className="inputs" />
          </section>

          <button className="reg-btn">Register</button>
          <div className="login-redirect">
            <p>Already Registered?</p>
            <Link to={"/login"}>
              {" "}
              <span> Login</span>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
