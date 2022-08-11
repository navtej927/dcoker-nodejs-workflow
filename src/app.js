const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ 1: 1 });
});

module.exports = { app };