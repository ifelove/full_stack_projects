import React from "react";
import { useGlobalContext } from "../../context";

const EmailConfirmation = () => {
  const { email } = useGlobalContext();
  const OTPRef = React.useRef();

  React.useEffect(() => {
    OTPRef.current.focus();
  }, []);

  return (
    <section className="verify-container">
      <div className="verify-main">
        <h3>Email Verification</h3>
        <main className="verify-flex">
          <p>Email Verification link has been sent to {email} </p>

          <p>The link will expires in </p>
          <input
            type="text"
            // placeholder="Enter the 6 digit codes"
            className="verify-dom"
            name="verify-code"
            ref={OTPRef}
          />
        </main>
      </div>
    </section>
  );
};

export default EmailConfirmation;
