import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = React.useRef();

  React.useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <section className="verify-container">
      <div className="verify-main">
        <h3>Forgot Your Password?</h3>
        <main className="verify-flex">
          <p>
            Enter your email below and we will send you instruction
            to reset{" "}
          </p>

          <form action="">
            <label htmlFor="email"></label>
            <input
              type="email"
              // placeholder="Enter the 6 digit codes"
              className="verify-dom"
              name="verify-code"
              ref={emailRef}
            />
          </form>
          <div>
            <button className="verify-btn">Reset Password</button>
            <p>
              Rememeber your password?<Link to={"/Login"}>Login</Link>{" "}
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ForgotPassword;
