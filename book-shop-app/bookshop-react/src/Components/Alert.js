import React from "react";
import { useGlobalContext } from "../context";

const Alert = () => {
  const{alert,setAlert}=useGlobalContext()
  const{show,msg,status}=alert
  return (
    <article className={`alert alert-${status}`}>
      <h2>{msg}</h2>
    </article>
  );
};

export default Alert;
