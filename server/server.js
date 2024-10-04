const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");

const app = express();
const conn = require("./connect");
const bodyParser = require("body-parser");
var data = [];

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({ extend: true }));
app.use(body_parser.json());

const port = 3000;
const message = console.log(`server started on ${port}`);
app.listen(port, message);
