//step 1 -->
//purpose = connect to mongoose database

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/seattle_db")
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
