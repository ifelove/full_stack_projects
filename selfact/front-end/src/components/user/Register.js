import React from "react";
import SmallLogo from "../SmallLogo";
import { Link, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../../context";
import { userRegistration } from "../../services/userService";

const Register = () => {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX = "";
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

  //focusing on the first name input in every rerendering
  React.useEffect(() => {
    firstnameInputRef.current.focus();
  }, []);
  //validating the user inputs
  useEffect(() => {
    setValidFirstame(USER_REGEX.test(firstname));
  }, [firstname]);

  useEffect(() => {
    setValidLastname(USER_REGEX.test(lastname));
  }, [lastname]);
  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
  }, [password]);
  useEffect(() => {
    setValidPasswordConfirm(USER_REGEX.test(passwordConfirm));
    setValidMatch(password === passwordConfirm);
  }, [passwordConfirm]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  useEffect(() => {
    setErrMsg("");
  }, [firstname, lastname, password, passwordConfirm]);

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

    const nameInput = USER_REGEX.test(firstname);
    const passwordInput = PASSWORD_REGEX.test(password);
    const emailInput = EMAIL_REGEX.test(email);
    if (!nameInput || !passwordInput || !emailInput) {
      setErrMsg("Invalid Entry");
      return;
    }

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
            setSuccess(true);
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
              <FontAwesomeIcon
                icon={faCheck}
                className={validFirstname ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validFirstname || !firstname ? "hide" : "invalid"}
              />
            </label>
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
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <section className="formInput">
            <label htmlFor="lastname">
              Last Name
              <FontAwesomeIcon
                icon={faCheck}
                className={validLastname ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validLastname || !lastname ? "hide" : "invalid"}
              />
            </label>
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
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <section className="formInput">
            <label htmlFor="email">
              Email
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !email ? "hide" : "invalid"}
              />
            </label>
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
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <section className="formInput">
            <label htmlFor="password">
              Password
              <FontAwesomeIcon
                icon={faCheck}
                className={validPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPassword || !password ? "hide" : "invalid"}
              />
            </label>
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
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
          <section className="formInput">
            <label htmlFor="passwordConfirm">
              {" "}
              Confirm Password
              <FontAwesomeIcon
                icon={faCheck}
                className={validPasswordConfirm ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validPasswordConfirm || !passwordConfirm ? "hide" : "invalid"
                }
              />
            </label>
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
          <p
            id="confirmnote"
            className={matchFocus && !validMatch ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>

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
