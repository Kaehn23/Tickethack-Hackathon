const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;