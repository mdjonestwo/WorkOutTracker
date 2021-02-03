const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Exercise({
  name: {
    type: String,
    trim: true,
    required: "Name is Required",
  },
  type: {
    type: String,
    trim: true,
    required: "Exercise type is Required",
  },
  weight: {
    type: Number,
    trim: true,
    required: true,
  },
  Sets: {
    type: Number,
    trim: true,
    required: true,
  },
  Reps: {
    type: Number,
    trim: true,
    required: true,
  },
  Duration: {
    type: Number,
    trim: true,
    required: true,
  },
});

//add prototype to check if its a cardio exercise
