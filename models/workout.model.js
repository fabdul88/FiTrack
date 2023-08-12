// Referencing Mongoose
const mongoose = require('mongoose');

// Defining a Schema and the structure of the document, default values, validators.
const workoutSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username cant be blank'],
    },
    description: {
      type: String,
      required: [true, 'description cant be blank'],
    },
    duration: {
      type: Number,
      required: [
        true,
        'duration cant be blank and has to be a minimum allowed value of 1',
      ],
      min: 1,
    },
    date: {
      type: Date,
      required: [true, 'date cannot be blank'],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    currentUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Auth',
    },
  },
  {
    timestamps: true,
  }
);

// Exporting model
module.exports = mongoose.model('Workout', workoutSchema);
