<<<<<<< HEAD
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
=======
require("dotenv").config() 
require("./models/connection")
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
>>>>>>> d0c22b306c53be694d81acba9569adde89a61751

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var tripsRouter = require("./routes/trips");

const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

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
