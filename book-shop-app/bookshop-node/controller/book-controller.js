const Book = require("../models/Book-model");
const getAllBooks = async (req, res) => {
  const{ title,price,author,category,language}=req.query
  const books = await Book.find(req.query);
  res.status(201).json({ books,nHbits:books.length });
};
const getSingleBooks = async (req, res) => {
  const bookID = req.params.id;
  const book = await Book.findOne({ _id: bookID });
  if (!book) {
    return res.status(404).json({ msg: ` no Book with id: ${bookID}` });
  }

  res.status(200).json({ book });
};
const postBook = async (req, res) => {
  console.log(req.body);
  const book = await Book.create(req.body);
  res.status(201).json(book);
};
const updateSingleBook = async (req, res) => {
  const  bookID  = req.params.id;

  const book = await Book.findOneAndUpdate({ _id: bookID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!book) {
    return res.status(404).json({ msg: `No Book with id: ${bookID}` });
  }

  res.status(201).send("Boook updated successfully");
};
const deleteBook = async (req, res) => {
  const bookID = req.params.id;
  console.log(bookID);
  const book = await Book.findOneAndDelete({ _id: bookID });
  if (!book) {
    return res.status(404).json({ msg: `No Book with id: ${bookID}` });
  }

  res.status(200).send("Book deleted successfully");
};

//const getFilterLogic = async (req, res) => {
 // res.status(201).send("...gettting logic");
//};

module.exports = {
  getAllBooks,
  getSingleBooks,
  postBook,
  deleteBook,
  updateSingleBook,
  getFilterLogic,
};
