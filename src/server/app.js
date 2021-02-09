const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

app.use(bodyParser.json());

router.get("/ping", (req, res) => {
  res.send("pong")
})

module.exports = app;
