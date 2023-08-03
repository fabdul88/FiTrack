// Referencing Mongoose
const mongoose = require('mongoose');

// Defining a Schema and the structure of the document, default values, validators.
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: [true, 'cant be blank'],
      unique: false,
      match: [/[a-zA-Z0-9]/, 'is invalid'],
      trim: true,
      minlength: 3,
    },
    email: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Auth',
    },
    workouts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Exporting model
module.exports = mongoose.model('User', userSchema);
