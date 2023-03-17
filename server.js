require("colors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./index");
const port = process.env.PORT || 8080;


// database connected
mongoose
  .connect(`${process.env.DATABASE_URI}/airTicket`)
  .then(() => {
    console.log(`Database Connected Successfully`.black.bgGreen);
  })
  .catch((err) => console.log(err.message).red.bold);


// server running
app.listen(port, () => {
  console.log(`Server is running port ${port}`.red.bold);
});
