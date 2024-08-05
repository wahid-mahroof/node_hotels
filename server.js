const express = require("express");
const app = express();
const db = require("./db.js");

const bodyparser = require("body-parser");

const mongoose = require("mongoose");

app.use(bodyparser.json());

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
