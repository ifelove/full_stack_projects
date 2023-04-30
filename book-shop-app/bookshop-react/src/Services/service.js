import axios from "axios";
//const url = "http://localhost:5000/api/v1/books";

export const getAllBooks = async () => {
  try {
    return await axios.get("http://localhost:5000/api/v1/books", {
      headers: { Accept: "Application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleBook = async (bookID) => {
  return await axios.get(`http://localhost:5000/api/v1/books${bookID}`, {
    headers: { Accept: "Application/json" },
  });
};
/**/
export const postBook = async (book) => {
  return await axios.post("http://localhost:5000/api/v1/books", book);
};

export const deleteBook = async (bookID) => {
  return await axios.delete(
    `http://localhost:5000/api/v1/books/${bookID}`)
};



export const updateBook = async (bookID, book) => {
  return await axios.patch(
    `http://localhost:5000/api/v1/books/${bookID}`,
    book
  );
};
