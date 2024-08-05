const express = require("express");
const router = express.Router();
const MenuLists = require("./../models/MenuLists");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenulists = new MenuLists(data);
    const response = await newMenulists.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuLists.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
