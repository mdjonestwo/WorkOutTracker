const db = require("../models");
const mongoose = require("mongoose");
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set("useFindAndModify", false);

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
          totalWeight: { $sum: "$exercises.weight" },
        },
      },
    ])
      .then((response) => {
        console.log(response), res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log("received");
    console.log(req.params.id);
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: [req.body] } }
    )
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
          totalWeight: { $sum: "$exercises.weight" },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: [req.body] } }
    )
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
