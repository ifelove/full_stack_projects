import React from "react";
import { useGlobalContext } from "../context";

const Alert = () => {
  const{alert,setAlert}=useGlobalContext()
  const{show,msg,status}=alert
  return (
    <span className="dont"> 
      <article className={`alert alert-${status}`}>
        <h2>{msg}</h2>
      </article>
    </span>
  );
};

export default Alert;
