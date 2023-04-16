import React from "react";

const AppContext = (children = React.createContext());

export const AppProvider = () => {
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
  const [publishedDate, setPublishedDate] = React.useState("");
  const [alert,setAlert]=React.useState({show:false,msg:"",status:""})
  const [quoteIndex,setQuoteIndex]=React.useState(0)
  const[quote,setQuote]=React.useState()


  return (
    <AppContext.Provider value={{ bookList, setBookList }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
