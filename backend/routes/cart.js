var express = require("express");
var router = express.Router();
const Cart = require("../models/cart");
const Trip = require("../models/trips");

router.post("/", (req, res) => {
  Trip.findById(req.body.id.trim()).then((trip) => {
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
router.get("/", (req, res) => {
  Cart.find().then((trips) => {
    res.json({ trips });
  });
});

router.delete("/", (req, res) => {
  Cart.deleteMany().then((data) => {
    res.json({ result: true });
  });
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);

  Cart.deleteOne({ _id: req.params.id }).then((data) => {
    res.json({ result: true });
  });
});

module.exports = router;
