require("express-async-errors");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/errorHandler");
const authRouter = require("./routes/auth");
const userRoute = require("./routes/userRoute");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(cors());
app.use(express.static(path.resolve(__dirname, "./front-end/build")));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRoute);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
};

start();
