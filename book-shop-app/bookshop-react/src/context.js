import React from "react";
import book from "./books";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [books, setBooks] = React.useState([]);
   const [filterbooks, setFilterBooks] = React.useState([]);
  const [bookIndex, setBookIndex] = React.useState(1);
  const [sectionToFilter, setSectionToFilter] = React.useState("");
  const [filterLocation, setFilterLocation] = React.useState({});
  const [filterableItems, setFilterableItems] = React.useState([]);
  const [isFilterOpen, setIsFilterOpen] = React.useState(true);
  const [title, setTitle] = React.useState("");
  const [bookDesc, setBookDesc] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [displayCoverUrl, setDisplayCoverUrl] = React.useState("");
  const [displayCoverTitle, setDisplayCoverTitle] = React.useState("");
  const [ISBN, setISBN] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [searchText,setSearchText]=React.useState('')

  const [url, setUrl] = React.useState("");

  const [isAlert, setIsAlert] = React.useState("");
  const [alert, setAlert] = React.useState({
    show: true,
    msg: "Book updated succesfully",
    status: "success",
  });
const [ischecked,setIschecked]=React.useState(false)
const [filterableObjects,setFilterableObjects]=React.useState({})
const [itemName, setItemName] = React.useState([]);

 const [userInfo, setUserInfo] = React.useState({
   languages: [],
   result: [],
 });

  return (
    <AppContext.Provider
      value={{
        books,
        setBooks,
        title,
        setTitle,
        bookDesc,
        setBookDesc,
        price,
        setPrice,
        author,
        setAuthor,
        ISBN,
        setISBN,
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
        searchText,
        setSearchText,
        filterableObjects,
        setFilterableObjects,
        ischecked,
        setIschecked,
        itemName,
        setItemName,
        userInfo,
        setUserInfo,
        filterbooks,
        setFilterBooks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
