const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", db.getCrimeData);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
