const path = require("path");
const Workout = require(__dirname,"../models/workout.js");

module.exports = function (app) {

  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
  });

  // app.post("/api/workouts", function (req, res) {
  // });

  // app.put("/api/workouts/:id", ({ body, params }, res) => {

  // });
}