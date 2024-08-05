const mongoose = require("mongoose");
require("dotenv").config();

//define the mongodb connection URL
//const mongoURL = "mongodb://localhost:27017/hotels";
const mongoURI = process.env.MONGODB_URI;
//const mongoURI = process.env.MONGODB_URI;

//setup mongodb connection
mongoose.connect(mongoURI, {
  useNewUrlparser: true,
  useUnifiedTopology: true,
});

//get the default connection
// mongoose maintain a deafult connection object   reprrsenting hte mongodb connection.

const db = mongoose.connection;

//define event listener for database connection

db.on("connected", () => {
  console.log("connected to mongoDB server");
});

db.on("disconnected", () => {
  console.log(" mongoDB disconnected ");
});

db.on("Error", () => {
  console.log("mongoDB connection error");
});

module.exports = db;
