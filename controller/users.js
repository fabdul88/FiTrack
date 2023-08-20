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
};
