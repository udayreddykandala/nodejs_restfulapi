const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).json({
    message: " All about request object",
  });
});
//params
app.get("/:name", (req, res) => {
  console.log(req.params.name);
  res.status(200).json({
    message: " All about request object",
  });
});
//query
app.get("/", (req, res) => {
  console.log(req.query);
  res.status(200).json({
    message: " All about request object",
  });
});

app.listen(3000, () => {
  console.log(" serever is running on port 3000");
});
