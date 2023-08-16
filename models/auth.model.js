const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const authSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "can't be blank"],
      lowercase: true,
    },
    lastname: {
      type: String,
      required: [true, "can't be blank"],
      lowercase: true,
    },
    username: {
      type: String,
      required: [true, "can't be blank"],
    },
    email: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      lowercase: true,
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

// check to see if entered password matches the hashed password when logging in
authSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// pre check password and see if it has been modified or not. If modified, hash password, if not modified move to next middleware
authSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('Auth', authSchema);
