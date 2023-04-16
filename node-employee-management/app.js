const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
const connectDB = require("./db/connectDB");
require("dotenv").config();

const employees = require("./route/employee-route");

//app.get("/", (req, res) => {
// res.send("Hello wolrd");
//});
//middleware
app.use(cors());
app.use(express.json());

//route
app.use("/api/vi/employees", employees);
//app.get('/api/vi/employees') all the items
//app.post('/api/vi/employees') new grocery
//app.patch('/api/vi/employees/:id') update a particular grocery
//app.get('/api/vi/employees/:id') get a single item
//app.delete('/api/vi/employees/:id') delete item

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    app.listen(port, console.log(`server is running on ${port}.......`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
