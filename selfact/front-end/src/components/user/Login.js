import React from "react";
import SmallLogo from "../SmallLogo";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { userLogin } from "../../services/userService";

const Login = () => {
  const navigate = useNavigate();
  const { email, password, setEmail, setPassword } = useGlobalContext();

  const loginUser = (e) => {
    e.preventDefault();
    const loginCredentials = { email: email, password: password };
    userLogin(loginCredentials)
      .then((response) => {
        console.log(response);
        try {
          if (response.status === 200) {
            navigate("/dashboard");
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.request);
        console.log(error.message);
      });
  };

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
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputLogin "
            />
          </section>
          <section className="input-section">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputLogin "
            />
          </section>
          <section className="remember">
            <input type="checkbox" name="Isremember" className="check" />
            <label htmlFor="remember">Remember me</label>
          </section>
          <button className="login-btn" onClick={loginUser}>
            Login
          </button>
        </form>
        <p className="fogt-passwd">Forgot your password?</p>
        <h6>
          Not a member?<Link to={"/register"}>Register</Link>{" "}
        </h6>
      </div>
    </main>
  );
};

export default Login;
