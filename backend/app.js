<<<<<<< HEAD
// require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./models/connection");
=======
require("dotenv").config() 
require("./models/connection")
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

>>>>>>> d45c965ebb19659b8425c5714c45eea9ab1b5068
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var tripsRouter = require("./routes/trips");

<<<<<<< HEAD
=======

const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

>>>>>>> d45c965ebb19659b8425c5714c45eea9ab1b5068
var app = express();
const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trips", tripsRouter);

module.exports = app;
