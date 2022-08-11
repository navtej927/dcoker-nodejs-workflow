const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  return res.status(200).json({ 1: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
