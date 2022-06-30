// requiring User mongoose model
const User = require('../models/user.model');

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
};

exports.addUsers = async (req, res) => {
  const { username } = req.body;

  // creating a new instance of User using username
  const newUser = new User({ username });

  try {
    // saving newUSer to mongoDB
    await newUser.save();
    res.status(201).json('added user');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
