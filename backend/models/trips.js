const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tripSchema = new Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
});

const Trip = mongoose.model("trajets", tripSchema);

module.exports = Trip;
