const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Some dummy data...");
});

app.listen(3000, () => {
  console.log("Application is running");
});
