import React, { useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [firstname, setFirstname] = React.useState("Bola");
  const [laststname, setLastname] = React.useState("");
  const [emailId, setEmailId] = React.useState("");

  
  return (
    <AppContext.Provider
      value={{ firstname, setFirstname, laststname,setLastname, emailId,setEmailId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContex = () => {
  return useContext(AppContext);
};
