const mongoose = require('mongoose');

const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "can't be blank"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Auth', authSchema);
