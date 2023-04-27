import React from "react";
import { useGlobalContext } from "../context";
import {AiOutlineUnorderedList} from 'react-icons/ai'
const Addbook = () => {
  const {
    title,
    setTitle,
    price,
    setPrice,
    url,
    setUrl,
    language,
    setLanguage,
    isbnNumber,
    setIsbnNumber,
    category,
    setCategory,
  } = useGlobalContext();
  return (
    <div className="add-book">
      <main className="headline">
        <p><AiOutlineUnorderedList/> Add New Book</p>
      </main>
      <form action="">
        <section className="form-1">
          <main className="main">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Enter Book Title" />
          </main>
          <main className="main">
            <label htmlFor="title">Author</label>
            <input type="text" placeholder="Enter Book Author" />
          </main>
          <main className="main">
            <label htmlFor="title">Book Cover</label>
            <input type="text" placeholder="Enter Book cover url" />
          </main>
          <main className="main">
            <label htmlFor="title">ISBN Number</label>
            <input type="text" placeholder="Enter Book  ISBN  Number" />
          </main>
        </section>
        <section className="form-2">
          <main>
            <label htmlFor="title">Price</label>
            <input type="text" placeholder="Enter Book Price" />
          </main>
          <main>
            <label htmlFor="title">Language</label>
            <select name="langauage" id="">
              <option value="">Select Language</option>
              <option value="english">English</option>
              <option value="french">French</option>
            </select>
          </main>
          <main>
            <label htmlFor="title">Category</label>
            <select name="category" id="">
              <option value="">Select Category</option>
              <option value="ronance">Romance</option>
              <option value="science">Science</option>
            </select>
          </main>
        </section>

        <section className="btn-section">
          <button>Save</button>
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
