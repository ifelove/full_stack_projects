import React from "react";
import books from "./books";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [bookLists, setBookLists] = React.useState([]);
  const [bookIndex, setBookIndex] = React.useState(1);
  const[sectionToFilter,setSectionToFilter]=React.useState('')
  const [filterLocation,setFilterLocation]=React.useState({})
  const [filterableItems,setFilterableItems]=React.useState([])
  const[isFilterOpen,setIsFilterOpen]=React.useState(false)
  const [title, setTitle] = React.useState("mmmmmmmmm");
  const [bookDesc, setBookDesc] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [author, setAuthor] = React.useState('');
  const [displayCoverUrl,setDisplayCoverUrl]=React.useState('')
   const [displayCoverTitle, setDisplayCoverTitle] = React.useState("");
  const [isbnNumber, setIsbnNumber] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [freeshiping, setFreeShiping] = React.useState(false);
  const [bestSellerRank, setBestSellerRank] = React.useState(10);
  const [publisher, setPublisher] = React.useState("");
  const [url, setUrl] = React.useState("nnnnnnnnnnn");
  const [publishedDate, setPublishedDate] = React.useState("");
  const [isAlert, setIsAlert] = React.useState("");
  const [alert, setAlert] = React.useState({
    show: true,
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
        bookIndex,
        setBookIndex,
        displayCoverUrl,
        setDisplayCoverUrl,
        displayCoverTitle,
        setDisplayCoverTitle,
        sectionToFilter,
        setSectionToFilter,
        filterableItems,
        setFilterableItems,
        filterLocation,
        setFilterLocation,
        isFilterOpen,
        setIsFilterOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
