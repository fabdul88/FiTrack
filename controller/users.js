// requiring User mongoose model
const UserModel = require('../models/user.model');

exports.getUsers = (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
};

exports.addUsers = async (req, res) => {
  const { username } = req.body;

  // creating a new instance of UserModel using username
  const newUser = new UserModel({ username });

  try {
    // saving newUSer to mongoDB
    await newUser.save();
    res.status(201).json('added user');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
