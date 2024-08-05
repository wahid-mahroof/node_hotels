const express = require("express");
const app = express();
require("dotenv").config();
const db = "./db";

const bodyparser = require("body-parser");
app.use(bodyparser.json());
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");

app.get("/", function (req, res) {
  res.send("Welcome to our hotel");
});

//post route to add a person

const personRoutes = require("./routes/personRoutes");
const menuitemRoutes = require("./routes/menuitemRoutes");

app.use("/person", personRoutes);
app.use("./Menu", menuitemRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
