import React from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [bookLists, setBookLists] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [bookDesc, setBookDesc] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [author, setAuthor] = React.useState({
    firstname: "",
    lastname: "",
    age: "",
    about: "",
    nationality: "",
  });
  const [isbnNumber, setIsbnNumber] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [freeshiping, setFreeShiping] = React.useState(false);
  const [bestSellerRank, setBestSellerRank] = React.useState(10);
  const [publisher, setPublisher] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [publishedDate, setPublishedDate] = React.useState("");
  const [isAlert, setIsAlert] = React.useState("");
  const [alert, setAlert] = React.useState({
    show: false,
    msg: "Book updated succesfully",
    status: "success",
  });

  return (
    <AppContext.Provider
      value={{
        bookLists,
        setBookLists,
        title,
        setTitle,
        bookDesc,
        setBookDesc,
        price,
        setPrice,
        author,
        setAuthor,
        isbnNumber,
        setIsbnNumber,
        language,
        setLanguage,
        category,
        setCategory,
        alert,
        setAlert,
        url,
        setUrl,
        isAlert,
        setIsAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
