import React, { useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
 
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [employees, setEmpolyees] = React.useState([]);

  return (
    <AppContext.Provider
      value={{
    
        firstname,
        setFirstname,
        lastname,
        setLastname,
        email,
        setEmail,
        employees,
        setEmpolyees,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContex = () => {
  return useContext(AppContext);
};
