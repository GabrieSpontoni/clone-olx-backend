const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

var index = require("./routes/index");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static("public"));

app.use("/", index);

module.exports = app;
