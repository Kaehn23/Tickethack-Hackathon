var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");
var moment = require("moment");
moment().format();
/* GET home page. */
router.get("/:departure/:arrival/:date", function (req, res) {
  const dayStart = moment(req.params.date).startOf("day");

  const dayEnd = moment(req.params.date).endOf("day");

  Trip.find({
    departure: req.params.departure,
    arrival: req.params.arrival,
    date: {
      $gte: dayStart,
      $lt: dayEnd,
    },
  }).then((trip) => res.json({ trip }));
});

module.exports = router;
