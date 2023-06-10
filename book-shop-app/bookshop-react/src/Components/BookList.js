import React from "react";
import ReactPaginate from "react-paginate";
import { ShowBook } from "./ShowBook";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { BsArrowDownSquare } from "react-icons/bs";
import { getAllBooks, deleteBook, updateBook } from "../Services/service";
import { useNavigate } from "react-router-dom";
export const BookList = () => {
  const [pagecount, setPagecount] = React.useState(15);
  const navigate = useNavigate();
  const page = 1;
  const limit = 6;
  const {
    books,
    setBooks,
    setFilterLocation,
    isFilterOpen,
    setIsFilterOpen,
    setFilterableItems,
    setDisplayCoverTitle,
    setDisplayCoverUrl,
    filterableObjects,
    setFilterableObjects,
    itemName,
    setItemName,
    userInfo,
    setUserInfo,
    filterbooks,
    setFilterBooks,
  } = useGlobalContext();

  const fetch = () =>
    getAllBooks(page, limit)
      .then((res) => {
        //console.log(res.headers['content-range'])
        const data = res.data.books;
        const totalCount = res.data.totalCount;
        // console.log(totalCount);
        setPagecount(Math.ceil(totalCount / limit));

        setBooks(data);
        //console.log(res.data.length);
        // console.log(Object.keys(res.data).length);
        // console.log("this is new item", employees);
      })
      .catch((error) => console.log(error)); //.then((res)=>{console.log(res.data.items)})
  //console.log("hello")
  // console.log(employees);

  React.useEffect(() => {
    fetch();
  }, []);

  //console.log(books);
  // console.log(".......HI");

  const displayBook = (e) => {
    const text = e.target.textContent;
    // console.log(text);
    const display = books.find((item) => text === item.title);
    //console.log(display);
    // display.map((item) => {
    const { url, title } = display; //item;
    // console.log(url);

    setDisplayCoverUrl(url);
    setDisplayCoverTitle(title);
  };
  const editBook = (id) => {
    navigate(`/updatebook/${id}`);
  };
  const deleteBookFromList = (id) => {
    deleteBook(id).then(() => {
      //   console.log("deleted........");
    });
  };
  const handlePageChange = (page) => {
    // console.log(page.selected);
    const currentPage = page.selected + 1;
    // console.log(currentPage);
    getAllBooks(currentPage, limit)
      .then((res) => {
        const data = res.data.books;
        setBooks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //React.useEffect(()=>)

  const changeLocation = (e) => {
    const section =
      e.target.parentElement.parentElement.textContent.toLowerCase();
    // console.log(section);
    const temp = e.target.getBoundingClientRect();

    const { left, right, bottom } = temp;
    const center = (left + right) / 2;
    //  console.log(center);
    // console.log(bottom);
    setFilterLocation({ center, bottom });
  };
  const displayfilter = async (text) => {
    await getAllBooks(page, 3)
      .then((res) => {
        const data = res.data.books;
        // console.log(data)
        // const totalCount = res.data.totalCount;
        // setPagecount(Math.ceil(totalCount / limit));

        setFilterBooks(data);
      })
      .catch((error) => console.log(error));

    const output = [];
    let marked = [];
    await filterbooks.forEach((item) => {
      output.push(item[text]);
      marked = [...marked, item.marked];
      console.log(output);
    });

    const filtered = await filterbooks.map((item) => {
      const { _id, marked } = item;
       output.push(item[text]);
       let tex=item[text]
      return {tex, _id, marked};
    });
   // console.log('filtered',filtered);
    setItemName([...filtered])

   // console.log(output);
    setFilterableItems(output);
    setUserInfo({
      languages: [...output],
      result: [...marked],
    });
    setFilterableObjects({ text: text, output: output });

    // await setFilterableItems(output);
    // setItemName({...itemName, checking: {
    // [output]: false,
    // }})
    setIsFilterOpen(!isFilterOpen);
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
              {books.length == 0 ? (
                <Loading />
              ) : (
                books?.map((item) => {
                  const {
                    _id,
                    title,
                    author,
                    ISBN,
                    language,
                    category,
                    price,
                  } = item;
                  //   console.log(item);
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
                          <button
                            className="btnEdit"
                            onClick={() => editBook(_id)}
                          >
                            Update
                          </button>
                          <span>
                            <button
                              className="btnDelete"
                              onClick={() => deleteBookFromList(_id)}
                            >
                              Delete
                            </button>
                          </span>
                        </section>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          {books.length > 0 && (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pagecount}
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
          )}
        </section>
      </main>
      <section className="book-display">
        <ShowBook />
      </section>
    </main>
  );
  //
};
