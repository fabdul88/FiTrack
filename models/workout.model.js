// Referencing Mongoose
const mongoose = require("mongoose");

// Defining a Schema and the structure of the document, default values, validators.
const workoutSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting model
module.exports = mongoose.model("Workout", workoutSchema);
