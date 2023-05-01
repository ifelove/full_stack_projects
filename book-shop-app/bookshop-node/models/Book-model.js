const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title must be provided"],
    trim: true,
    maxlength: [20, "Title must not be more than 20 letters "],
  },
  url: { type: String },
  author: {
    type: String,
    required: [true, "Author name must be provided"],
    maxlength: [30, "maximum accepted letter is 30!!!"],
  },
  price: { type: Number, required: [true, "Price must be provided"] },
  ISBN: { type: String },
  category: { type: String },
  language: { type: String },
});

module.exports = mongoose.model("Book", BookSchema);
