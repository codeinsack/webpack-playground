const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(3000, () => {
  console.log("Application is running");
});
