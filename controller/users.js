// requiring User mongoose model
const User = require('../models/user.model');

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
};

exports.addUsers = (req, res) => {
  // creating a new instance of User using username
  const newUser = new User(req.body);

  // saving newUSer to mongoDB
  newUser
    .save()
    .then(() => res.json('added User'))
    .catch((err) => res.status(400).json(err));
};
