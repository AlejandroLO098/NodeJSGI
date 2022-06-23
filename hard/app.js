const { json } = require("express");
const express = require("express");
const app = express();
const data = require("./employee.json");
const port = 3000;

app.get("/", (req, res) => {
  res.send(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
