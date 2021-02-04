const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((response) => {
      res.json(response);
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then((response) => {
      res.json(response);
    });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(req.body).then((response) => {
      res.json(response);
    });
  });
};
