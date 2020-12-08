// Referencing Mongoose
const mongoose = require("mongoose");

// Defining a Schema and the structure of the document, default values, validators.
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting model
module.exports = mongoose.model("User", userSchema);
