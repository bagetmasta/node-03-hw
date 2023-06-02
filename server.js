const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Baget:TPzXRGToaUOHBcFc@cluster1.ulwudcx.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
