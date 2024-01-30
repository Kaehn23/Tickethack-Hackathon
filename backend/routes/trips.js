var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");
var moment = require("moment");
moment().format();
/* GET home page. */
router.get("/:departure/:arrival/:date", function (req, res) {
  const dateFromParams = req.params.date;
  const convertedDate = moment(dateFromParams, "YYYY/MM/DD").format(
    "DD/MM/YYYY"
  );
  const dayStart = moment(convertedDate, "DD/MM/YYYY")
    .startOf("day")
    .toISOString();
  const dayEnd = moment(convertedDate, "DD/MM/YYYY")
    .add(1, "days")
    .startOf("day")
    .toISOString();

  console.log(dateFromParams);
  console.log(convertedDate);
  console.log(dayStart);
  console.log(dayEnd);

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
