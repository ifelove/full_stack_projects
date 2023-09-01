const express = require("express");
const app = express();
const path=require("path");
const port = process.env.PORT || 5000;





app.use(express.json());
app.use(express.static(path.resolve(__dirname,"./front-end/build")))

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
