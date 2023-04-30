import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { postBook } from "../Services/service";
import Select from "react-select";
const Addbook = () => {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    price,
    setPrice,
    url,
    setUrl,
    language,
    setLanguage,
    ISBN,
    setISBN,
    category,
    setCategory,
  } = useGlobalContext();

  const navigate = useNavigate();
  const saveBook = (e) => {
    e.preventDefault();
    const book = {
      title: title,
      price: price,
      author: author,
      category: category,
      language: language,
      ISBN: ISBN,
      url: url,
    };
    //send book to the server
   
    postBook(book).then(() =>
      console.log(`${title} by ${author} posted successfully`)
    );
    //calling post method
   // console.log(book);
   // setTitle("");
   // setAuthor("");
   // setPrice("");
  //  setUrl("");
   // setISBN("");
  };

  let [value, setValue] = React.useState(null);
  const options = [
    { value: "english", label: "english" },
    { value: "french", label: "french" },
  ];
  const optionHandler = (selected) => {
    console.log(selected.value);
    setValue(selected.value);
    setLanguage(value);
  };
  const languages = [
    "Select Language",
    "English",
    "French",
    "Yoruba",
    "Spanish",
  ];
  const categories = ["Select Categories", "Kids", "Romance", "Science", "IT"];

  return (
    <div className="add-book">
      <main className="headline">
        <p>
          <AiOutlineUnorderedList /> Add New Book
        </p>
      </main>
      <form action="">
        <section className="form-1">
          <main className="main">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </main>
          <main className="main">
            <label htmlFor="title">Author</label>
            <input
              type="text"
              placeholder="Enter Book Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </main>
          <main className="main">
            <label htmlFor="title">Book Cover</label>
            <input
              type="text"
              placeholder="Enter Book cover url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </main>
          <main className="main">
            <label htmlFor="title">ISBN Number</label>
            <input
              type="text"
              placeholder="Enter Book  ISBN  Number"
              value={ISBN}
              onChange={(e) => setISBN(e.target.value)}
            />
          </main>
        </section>
        <section className="form-2">
          <main>
            <label htmlFor="title">Price</label>
            <input
              type="text"
              placeholder="Enter Book Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </main>
          <main className="select-container">
            <label htmlFor="language">Language</label>
            <select
              className="select"
              name="langauage"
              id=""
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((lang, index) => {
                return (
                  <option
                    className="option"
                    key={index}
                    value={`${lang.toLocaleLowerCase()}`}
                  >
                    {lang}
                  </option>
                );
              })}
              {/*
              <option value="">Select Language</option>
              <option value="english">English</option>
              <option value="french">French</option>*/}
            </select>

            {/**<Select options={options} name='language'defaultValue={value} onChange={optionHandler}/> */}
          </main>
          <main className="select-container">
            <label htmlFor="category">Category</label>
            <select
              className="select"
              name="category"
              id=""
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((categ, index) => {
                return (
                  <option
                    className="option"
                    key={index}
                    value={`${categ.toLocaleLowerCase()}`}
                  >
                    {categ}
                  </option>
                );
              })}
            </select>
          </main>
        </section>

        <section className="btn-section">
          <button onClick={saveBook}>Save</button>
          <span>
            <button>Cancel</button>
          </span>
          <span>
            <button>List</button>
          </span>
        </section>
      </form>
    </div>
  );
};

export default Addbook;
