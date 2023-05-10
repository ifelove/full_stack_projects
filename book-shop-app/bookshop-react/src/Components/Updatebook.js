import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useNavigate ,useParams} from "react-router-dom";
import { postBook, updateBook,getSingleBook } from "../Services/service";
import Select from "react-select";
const Updatebook = () => {
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

const bookId=useParams()
const{id}=bookId
React.useEffect(()=>{
  getSingleBook(id).then((res)=>{const{title,category,author,language,url,price,ISBN}=res.data.book;
  setTitle(title);
  setAuthor(author);
  setCategory(category);
  setLanguage(language);
  setPrice(price);
  setUrl(url);
  setISBN(ISBN)
}).catch((error)=>{console.log(error)})
},[id])

const updatebook=(id)=>{
const book={title:title,price:price,author:author,language:language,category:category,ISBN:ISBN,url:url}
updateBook(id,book).then(()=>{console.log('updated successfully')}).catch((error)=>{console.log(error)})
}

  const navigate = useNavigate();
  
  let [value, setValue] = React.useState(null);
  const options = [
    { value: "english", label: "english" },
    { value: "french", label: "french" },
  ];
 

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
          <button onClick={()=>updatebook(id)}>Update</button>
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

export default Updatebook;
