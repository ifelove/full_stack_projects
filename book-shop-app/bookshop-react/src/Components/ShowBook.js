import React from "react";
import { useGlobalContext } from "../context";
import axios from "axios";

export const ShowBook = () => {
  const page=1
  const limit=6

  const {
    books,
    setBooks,
    bookIndex,
    setBookIndex,
    displayCoverUrl,
    setDisplayCoverUrl,
    displayCoverTitle,
    setDisplayCoverTitle,
    searchText,
    setSearchText,
  } = useGlobalContext();

  // const bookToDisplay = bookLists[bookIndex];
  // const { title, url } = bookToDisplay;
  const coverUrl = displayCoverUrl;
  const coverTitle = displayCoverTitle;

  const diplayUrl = () => {
    
  };

React.useEffect(()=>{
 
   getSearchObt().then((res)=>{

 const data = res.data.books;
 setBooks(data);

   })
  

},[searchText])


const getSearchObt=async()=>{
return await axios.get(
  `http://localhost:5000/api/v1/books?title=${searchText}&page=${page}&limit=${limit}`
);}


return (
    <div>
      <main>
        <form action="">
          <input
            type="...search title"
            placeholder="search"
            value={searchText}
            className="search-box"
            onChange={(e)=>setSearchText(e.target.value)}
          />
        </form>
      </main>
      <section className="show-book-heading">
        <h4>{coverTitle}</h4>
      </section>
      <main>
        <img src={coverUrl} alt={coverTitle} className="cover-img" />
      </main>
    </div>
  );
};
