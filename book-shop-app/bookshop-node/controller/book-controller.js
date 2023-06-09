const Book = require("../models/Book-model");

const testing=async (req,res)=>{
 const book= await Book.find({}).sort("title").skip(5).limit(3)
res.status(201).json({book})
}


const getAllBooks = async (req, res) => {
  const { title, price, author, category, language, sort, fields, filtering } =
    req.query;
  const queryObj = {};

  if (title) {
    queryObj.title = { $regex: title, $options: "i" };
  }
  //filtering numerically

  if (filtering) {
    console.log(filtering);
    res.status(201).json(filtering);
  }

  if (author) {
    queryObj.author = author;
  }

  if (category) {
    queryObj.category = category;
  }
  if (language) {
    queryObj.language = language;
  }


 if (price) {
     queryObj.price = {$in:price.split(",")};
     
   }


  /**
   if (price) {
     queryObj.price = {$in:price.split(",")};
   }

    */
  //.....................................................//
  //sorting
  let result = Book.find(queryObj);

  if (sort) {
    const listToSort = sort.split(",").join(" ");
    console.log(listToSort);
    result = result.sort(listToSort);
  } else {
    result = result.sort(" createdAt");
  }
  //implementing select method
  if (fields) {
    const listToSelect = fields.split(",").join(" ");
    result = result.select(listToSelect);
  }
  //paginaion

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit; //start index
  const endIndex = page * limit; //end of the iten on a particular page

  //const count= (await result).length
  console.log(result);
  result = result.skip(skip).limit(limit);

  const totalCount = await Book.countDocuments(queryObj);
  console.log(totalCount);

  //setting content-range header
  const startRange = skip + 1;
  const endRange = endIndex < totalCount ? endIndex : totalCount;

  res.set("X-Total-Count", totalCount);
  res.set("Content-Range", `${startRange}-${endRange}/${totalCount}`);

  const books = await result;

  res.status(201).json({ books, nHbits: books.length, totalCount });
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
  const bookID = req.params.id;

  const book = await Book.findOneAndUpdate({ _id: bookID }, req.body);
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
  testing,
};
