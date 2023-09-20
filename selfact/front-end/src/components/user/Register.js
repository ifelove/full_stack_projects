import React from "react";
import SmallLogo from "../SmallLogo";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import {
  userRegistration,
  emailVerificationLink,
} from "../../services/userService";
import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";

const Register = () => {
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
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  //ref for firstname input container
  const firstnameInputRef = React.useRef();
  const errRef = React.useRef();

  // state manegement for inputs validations
  const [validFirstname, setValidFirstname] = React.useState(false);
  const [validLastname, setValidLastname] = React.useState(false);
  const [validEmail, setValidEmail] = React.useState(false);
  const [validPasswordConfirm, setValidPasswordConfirm] = React.useState(false);
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

  //state management for displaying instruction
  const [bottom, setBottom] = React.useState("");
  const [center, setCenter] = React.useState("");

  //focusing on the first name input in every rerendering
  React.useEffect(() => {
    firstnameInputRef.current.focus();
  }, []);
  //validating the user inputs
  React.useEffect(() => {
    if (firstname.match(USER_REGEX) === null) {
      setValidFirstname(false);
    } else {
      setValidFirstname(true);
    }
  }, [firstname]);

  React.useEffect(() => {
    if (lastname.match(USER_REGEX) === null) {
      setValidLastname(false);
    } else {
      setValidLastname(true);
    }
  }, [lastname]);

  React.useEffect(() => {
    if (email.match(EMAIL_REGEX) === null) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  }, [email]);

  React.useEffect(() => {
    if (password.match(PASSWORD_REGEX) === null) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  }, [password]);

  React.useEffect(() => {
    if (passwordConfirm.match(PASSWORD_REGEX) === null) {
      setValidPasswordConfirm(false);
    } else {
      setValidPasswordConfirm(true);
    }
    setValidMatch(password === passwordConfirm);
  }, [passwordConfirm]);

  React.useEffect(() => {
    setErrMsg("");
  }, [firstname, lastname, password, passwordConfirm]);

  const navigate = useNavigate();

  const handleOnchange = (e, action) => {
    console.log(e.target);
    action(e.target.value);

    const tempBtnLocation = e.target.getBoundingClientRect();
    const center = (tempBtnLocation.left + tempBtnLocation.right) / 2;
    const bottom = tempBtnLocation.bottom;
    setBottom(bottom);
    setCenter(center);
  };

  const registerUser = (e) => {
    e.preventDefault();

    const nameInput = firstname.match(USER_REGEX);
    const passwordInput = password.match(PASSWORD_REGEX);
    const emailInput = email.match(EMAIL_REGEX);
    // if (!nameInput || !passwordInput || !emailInput) {
    // setErrMsg("Invalid Entry");
    //  return;
    // }

    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    userRegistration(user)
      .then((response) => {
        if (response.status === 200) {
          setSuccess(true);
          const userRegistered = response.data.tokenUser;
          try {
            console.log(email);
            emailVerificationLink({ email: email });
          } catch (error) {
            console.log(error);
          }
        }
      })
      .then(() => {
        navigate("/verify");
      })
      .catch((error) => {
        // console.log(error.response);
        //  console.log(error.response.data.msg);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        //  console.log(error.request);
        //  console.log(error.message);
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

          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
        </main>
        <form className="reg-form">
          <section className="formInput">
            <label htmlFor="firstname">
              First Name
              <FaCheck className={validFirstname ? "valid" : "hide"} />
              <FaTimes
                className={validFirstname || !firstname ? "hide" : "invalid"}
              />
            </label>
            <main>
              <input
                type="text"
                autoComplete="false"
                name="firstname"
                value={firstname}
                onChange={(e) => handleOnchange(e, setFirstname)}
                className="inputs"
                ref={firstnameInputRef}
                required
                aria-invalid={validFirstname ? "false" : "true"}
                aria-describedby="firstname-note"
                onFocus={() => setFirstnameFocus(true)}
                onBlur={() => setFirstnameFocus(false)}
              />
            </main>
          </section>
          <section className="formInput">
            <label htmlFor="lastname">
              Last Name
              <FaCheck className={validLastname ? "valid" : "hide"} />
              <FaTimes
                className={validLastname || !lastname ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => handleOnchange(e, setLastname)}
              className="inputs"
              required
              aria-invalid={validLastname ? "false" : "true"}
              aria-describedby="lastname-note"
              onFocus={() => setLastnameFocus(true)}
              onBlur={() => setLastnameFocus(false)}
            />
          </section>

          <section className="formInput">
            <label htmlFor="email">
              Email
              <FaCheck className={validEmail ? "valid" : "hide"} />
              <FaTimes className={validEmail || !email ? "hide" : "invalid"} />
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => handleOnchange(e, setEmail)}
              className="inputs"
              required
              autoComplete="false"
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="email-note"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
          </section>
          <section className="formInput">
            <label htmlFor="password">
              Password
              <FaCheck className={validPassword ? "valid" : "hide"} />
              <FaTimes
                className={validPassword || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => handleOnchange(e, setPassword)}
              className="inputs"
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="password-note"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </section>
          <section className="formInput">
            <label htmlFor="passwordConfirm">
              {" "}
              Confirm Password
              <FaCheck className={validPasswordConfirm ? "valid" : "hide"} />
              <FaTimes
                className={
                  validPasswordConfirm || !passwordConfirm ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => handleOnchange(e, setPasswordConfirm)}
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
