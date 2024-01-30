var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");
/* GET home page. */
router.get("/", function (req, res, next) {
  Trip.find({ departure: req.body.departure }).then((trip) =>
    console.log(trip)
  );
  res.render("index", { title: "Express" });
});

module.exports = router;
