import React from "react";
import SmallLogo from "../SmallLogo";
import { Link, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../../context";
import { userRegistration } from "../../services/userService";

const Register = () => {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  //ref for firstname input container
  const firstnameInputRef = React.useRef();
  const errRef = React.useRef();

  // state manegement for inputs validations
  const [validName, setValidName] = React.useState(false);
  const [validPassword, setValidPassword] = React.useState(false);
  const [validMatch, setValidMatch] = React.useState(false);

  // state manegement for input focus
  const [firstnameFocus, setFirstnameFocus] = React.useState(false);
  const [lastnameFocus, setLastnameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordConfirmFocus, setPasswordConfirmFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);

  const [errMsg, setErrMsg] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  //focusing on the first name input in every rerendering
  useEffect(() => {
    firstnameInputRef.current.focus();
  }, []);

  const navigate = useNavigate();
  const {
    user,
    lastname,
    setLastname,
    firstname,
    setFirstname,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
  } = useGlobalContext();

  const registerUser = (e) => {
    console.log("hi");
    e.preventDefault();
    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    userRegistration(user)
      .then((response) => {
        console.log(response.data);
        try {
          if (response.status === 200) {
            const userRegistered = response.data.tokenUser;
            navigate("/login");
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
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="inputs"
              ref={firstnameInputRef}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setFirstnameFocus(true)}
              onBlur={() => setFirstnameFocus(false)}
            />
          </section>
          <section className="formInput">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="inputs"
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setLastnameFocus(true)}
              onBlur={() => setLastnameFocus(false)}
            />
          </section>
          <section className="formInput">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputs"
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="email-note"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
          </section>
          <section className="formInput">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputs"
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="password-note"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </section>
          <section className="formInput">
            <label htmlFor="passwordConfirm"> Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="inputs"
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirm-password-note"
              onFocus={() => setPasswordConfirmFocus(true)}
              onBlur={() => setPasswordConfirmFocus(false)}
            />
          </section>

          <button className="reg-btn" onClick={registerUser}>
            Register
          </button>
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
