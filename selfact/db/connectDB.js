const mongoose = require("mongoose");

const connectdb = async (url) => {
  return await mongoose.connect(url).then(() => {
    console.log("connected to DB");
  });
};

module.exports = connectdb;
