var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");
/* GET home page. */
router.get("/", function (req, res) {
  Trip.find({ departure: req.body.departure }).then((trip) =>
    res.json({ result: true, trip: trip })
  );
});

module.exports = router;
