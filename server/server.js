//purpose = make all of the info on our backend able to be easily processed/read by the front end/client side
//we will need express for this!

const express = require("express");
const db = require("./db");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

//middleware:
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
//middleware here ^//
