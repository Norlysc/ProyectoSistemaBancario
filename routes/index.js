const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  console.log(`GET1`);
  res.render("index", { title: "Sistema Bancario Social" });
});

module.exports = router;
