const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/hello-world", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/hello-world.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.get("/girl", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/girl.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(3000, () => {
  console.log("Application is running");
});
