const express = require("express");
const app = express();

const PORT = 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

app.set("port", PORT);
app.listen(app.get("port"), () => {
  console.log(`✅app is listening in PORT ${app.get("port")}`);
});

module.exports = app;
