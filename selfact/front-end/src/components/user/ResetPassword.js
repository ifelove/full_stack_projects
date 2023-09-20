import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context";

const Reset = () => {
  const { email } = useGlobalContext();
  const passRef = React.useRef();

  React.useEffect(() => {
    passRef.current.focus();
  }, []);

  return (
    <section className="verify-container">
      <div className="verify-main">
        <h3>Reset Password</h3>
        <main className="verify-flex">
          <p>Enter new password to {email}</p>

          <form action="">
            <label htmlFor="password"></label>
            <input
              type="password"
              // placeholder="Enter the 6 digit codes"
              className="verify-dom"
              name="newPassword"
              ref={passRef}
            />
          </form>
          <div>
            <button className="verify-btn">Submit</button>
            <p>
              Rememeber your password?<Link to={"/Login"}>Login</Link>{" "}
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Reset;
