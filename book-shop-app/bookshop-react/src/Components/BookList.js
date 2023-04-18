import React from "react";
import ReactPaginate from "react-paginate";
import { ShowBook } from "./ShowBook";
import books from "../books";

export const BookList = () => {
  const handlePageChange = () => {
    console.log("clicked");
  };
  return (
    <main className="main-container">
      <main className="container">
        <div className="book-list-design">
          <span className="book-list-logo">🕮</span>
          <span>
            <h3>BookList</h3>
          </span>
        </div>
        <section className="book-list">
          {console.log(books)}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={15}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
          />
        </section>
      </main>
      <section className="book-display">
        <ShowBook />
      </section>
    </main>
  );
};
