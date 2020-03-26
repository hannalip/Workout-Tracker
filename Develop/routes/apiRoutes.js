const db = require("../models/workout.js");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.find().then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

//   app.post("/api/workouts", function(req, res) {
//     db.find().then(data => {
//         res.json(data);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

//   app.post("/api/workout/:id", function(req, res) {
//     db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
//       res.json(dbImage);
//     });
//   });
};
