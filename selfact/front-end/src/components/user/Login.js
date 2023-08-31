import React from "react";
import SmallLogo from "../SmallLogo";

const Login = () => {
  return (
    <main className="container">
      <div className="login-container">
        <div className="register-logo">
          <SmallLogo />
          <span>Selfact</span>
        </div>
        <form className="form-login">
          <section className="input-section">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="inputLogin " />
          </section>
          <section className="input-section">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="inputLogin " />
          </section>
          <section className="remember">
            <input type="checkbox" name="Isremember" className="check" />
            <label htmlFor="remember">Remember me</label>
          </section>
          <button className="login-btn">Login</button>
        </form>
        <p className="fogt-passwd">Forgot your password?</p>
      </div>
    </main>
  );
};

export default Login;
