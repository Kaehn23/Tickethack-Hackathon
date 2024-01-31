var express = require("express");
var router = express.Router();
const Cart = require("../models/cart");

router.post("/", (req, res) => {
  const { departure, arrival, date, price } = req.body; //

  const newCart = new Cart({
    departure: departure,
    arrival: arrival,
    date: date,
    price: price,
  });

  newCart.save().then(() => res.json({ result: true, newCart }));
});

module.exports = router;
