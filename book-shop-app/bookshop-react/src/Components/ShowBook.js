import React from "react";
import { useGlobalContext } from "../context";

export const ShowBook = () => {
  const {
    bookLists,
    setBookLists,
    bookIndex,
    setBookIndex,
    displayCoverUrl,
    setDisplayCoverUrl,
    displayCoverTitle,
    setDisplayCoverTitle,
  } = useGlobalContext();

  const bookToDisplay = bookLists[bookIndex];
  const { title, url } = bookToDisplay;
  const coverUrl = displayCoverUrl;
  const coverTitle = displayCoverTitle;

  const diplayUrl = () => {};

  return (
    <div>
      <main>
        <form action="">
          <input type="search" placeholder="search" className="search-box" />
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
