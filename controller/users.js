// requiring User mongoose model
const UserModel = require('../models/user.model');

// get logged in user
exports.getUser = (req, res) => {
  const user = {
    _id: req.user._id,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    username: req.user.username,
    email: req.user.email,
  };

  res.status(200).json({ message: 'user information', data: user });

  // UserModel.find()
  //   .then((users) => res.json(users))
  //   .catch((err) => res.status(400).json(err));
};

// exports.addUsers = async (req, res) => {
//   const { username } = req.body;

//   // creating a new instance of UserModel using username
//   const newUser = new UserModel({ username });

//   try {
//     // saving newUSer to mongoDB
//     await newUser.save();
//     res.status(201).json({ message: 'added user', data: req.body });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
