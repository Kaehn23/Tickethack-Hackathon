var express = require("express");
var router = express.Router();
const Book = require("../models/booked");

router.get("/", (req, res) => {
  Book.find().then((trips) => {
    if (trips) {
      res.json({ trips });
    } else {
      console.log("trips not found");
    }
  });
});

router.post("/", (req, res) => {
  const trip = req.body.trip;

  console.log("backend trips", trip);

  const newBooks = new Book({
    departure: trip.departure,
    arrival: trip.arrival,
    date: trip.date,
    price: trip.price,
  });
  newBooks.save().then(() => res.json({ result: true, newBooks }));
});

module.exports = router;
