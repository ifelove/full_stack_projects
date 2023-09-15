import React from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [othername, setOthername] = React.useState("");
  const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [passwordConfirm, setPasswordConfirm] = React.useState("");

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        firstname,
        setFirstname,
        lastname,
        setLastname,
        othername,
        setOthername,
        email,
        setEmail,
        password,
        setPassword,
        passwordConfirm,
        setPasswordConfirm
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

