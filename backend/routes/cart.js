var express = require("express");
var router = express.Router();
const Cart = require("../models/cart");
const Trip = require("../models/trips");

router.post("/", (req, res) => {
  const id = req.body.id;
  console.log(id);
  Trip.findById(id).then((trip) => {
    if (trip) {
      console.log(trip);
      const newCart = new Cart({
        departure: trip.departure,
        arrival: trip.arrival,
        date: trip.date,
        price: trip.price,
      });
      newCart.save().then(() => res.json({ result: true, newCart }));
    } else {
      res.json({ result: false });
    }
  });
});

module.exports = router;
