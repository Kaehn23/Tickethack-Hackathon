const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookedSchema = new Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
});

const booked = mongoose.model("booked", bookedSchema);

module.exports = booked;