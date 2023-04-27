import React from "react";
import ReactPaginate from "react-paginate";
import { ShowBook } from "./ShowBook";
import { useGlobalContext } from "../context";
import { BsArrowDownSquare } from "react-icons/bs";
import { getAllBooks } from "../Services/service";
export const BookList = () => {
  const {
    bookLists,
    setBookLists,
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
  } = useGlobalContext();

  React.useEffect(() => {
    getAllBooks().then((res) => {
      const bookFromServer=res.data.books
      setBookLists(bookFromServer)
        ;
    });
  }, [bookLists]);

  

  const changeLocation = (e) => {
    const section =
      e.target.parentElement.parentElement.textContent.toLowerCase();
    console.log(section);
    const temp = e.target.getBoundingClientRect();

    const { left, right, bottom } = temp;
    const center = (left + right) / 2;
    console.log(center);
    console.log(bottom);
    setFilterLocation({ center, bottom });
    //setIsFilterOpen(false);
    //  setSectionToFilter(section);
    //displayfilter(section);
    // console.log(filterableItems);
  };

  //get item to display in the filter container
  const displayfilter = async (text) => {
    const output = [];
    await bookLists.forEach((item) => {
      output.push(item[text]);
    });
    //setFilterableItems(output);
    await setFilterableItems(output);
    setIsFilterOpen(!isFilterOpen);
  };

  const handlePageChange = (data) => {
    console.log(data.selected);
  };

  const displayBook = (e) => {
    const text = e.target.textContent;
    console.log(text)
    const display = bookLists.find((item) => text === item.title);
    //console.log(display);
   // display.map((item) => {
      const { url, title } =display //item;
     console.log(url);

      setDisplayCoverUrl(url);
      setDisplayCoverTitle(title);
   // });
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
                <th onClick={changeLocation}>
                  Title{" "}
                  <span
                    className="drop-icon"
                    onClick={() => displayfilter("title")}
                  >
                    <BsArrowDownSquare />
                  </span>
                </th>
                <th onMouseOver={changeLocation}>
                  Author{" "}
                  <span
                    className="drop-icon"
                    onClick={() => displayfilter("author")}
                  >
                    <BsArrowDownSquare />{" "}
                  </span>
                </th>
                <th onMouseOver={changeLocation}>
                  Price{" "}
                  <span
                    className="drop-icon"
                    onClick={() => displayfilter("price")}
                  >
                    <BsArrowDownSquare />{" "}
                  </span>
                </th>
                <th>ISBN</th>
                <th onMouseOver={changeLocation}>
                  Language
                  <span
                    className="drop-icon"
                    onClick={() => displayfilter("language")}
                  >
                    <BsArrowDownSquare />{" "}
                  </span>
                </th>
                <th onMouseOver={changeLocation}>
                  Category
                  <span
                    className="drop-icon"
                    onClick={() => displayfilter("category")}
                  >
                    <BsArrowDownSquare />{" "}
                  </span>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookLists.map((item) => {
                const { _id, title, author, ISBN, language, category, price } =
                  item;
                return (
                  <tr key={_id}>
                    <td onMouseOver={displayBook}>{title}</td>
                    <td>{author}</td>
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
            activeClassName={"active"}
          />
        </section>
      </main>
      <section className="book-display">
        <ShowBook />  
      </section>
    </main>
  );
};
