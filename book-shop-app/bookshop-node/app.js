const express = require("express");
const app = express();
const cors=require('cors')
require("dotenv").config();
const notFound = require("./middleware/no-found");
const errorHandler = require("./middleware/error-handler");
require("express-async-errors");
const connectDB = require("./db/connectDB");
const books = require("./route/book-route");
const port = process.env.PORT || 5000;

const Book=require('./models/Book-model')
const bookJson=require('./books.json')

//middleware
app.use(express.json());
app.use(cors())
app.use("/api/v1/books", books);
//app.use("/", (req, res) => {
//  res.status(200).send("<h1>Welcome Home!!!<h1>");
//});
app.use(errorHandler);
app.use(notFound);

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  //await Book.create(bookJson)
  app.listen(port, () => {
    console.log(`server listening on ${port}`);
  });
};

start();
