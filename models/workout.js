const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  author: String,
  title: String
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
