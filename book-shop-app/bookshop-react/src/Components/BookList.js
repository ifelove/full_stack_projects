import React from "react";
import ReactPaginate from "react-paginate";
import { ShowBook } from "./ShowBook";
import books from "../books";

export const BookList = () => {
  const handlePageChange = (data) => {
   // console.log(data.selected);
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
        <section className="book-list-table">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>ISBN Number</th>
                <th>Language</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((item) => {
                const { id, title, author, ISBN, language, category, price } =
                  item;
                return (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{`${author.firstname}  ${author.lastname}`}</td>
                    <td>{price}</td>
                    <td>{ISBN}</td>
                    <td>{language}</td>
                    <td>{category}</td>
                    <td>
                      <section className="inlineBtn">
                        <button className="btnEdit">Update</button>
                        <span>
                          <button className="btnDelete">Delete</button>
                        </span>
                      </section>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

<ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={15}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={"pagination justify-content-center"}
            pageLinkClassName={"page-link"}
            pageClassName={"page-item"}
            s
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={'active'}
          />




         
        </section>
      </main>
      <section className="book-display">
        <ShowBook />
      </section>
    </main>
  );
};
