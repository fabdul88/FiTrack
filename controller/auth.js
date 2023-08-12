const AuthModel = require('../models/auth.model');
const UserModel = require('../models/user.model');
const generateToken = require('../utils/generateToken');

// Registering a new user,
exports.registerUsers = async (req, res) => {
  const { firstname, lastname, username, email, password, confirmPassword } =
    req.body;

  // check to see if the user exists in the database first by email or username.
  const userExists = await AuthModel.findOne({
    $or: [{ email: email }, { username: username }],
  });

  // throw error if username exists
  if (userExists?.username === username) {
    // throw new Error('username is already taken');
    res.status(400).json({ message: 'username is already taken' });
    return;
  }
  // throw error if email exists
  else if (userExists?.email === email) {
    // throw new Error('user already exists');
    res.status(400).json({ message: 'user already exists' });
    return;
    // throw error if passwords do not match
  } else if (password !== confirmPassword) {
    res.status(400).json({ message: 'passwords do not match' });
    return;
  }

  try {
    // creating a new instance of AuthModel since user does not yet exist
    const newUser = new AuthModel({
      firstname,
      lastname,
      username,
      email,
      password,
    });

    // if req.body data exists...
    if (newUser) {
      generateToken(res, newUser._id);
      // saving newUser to mongoDB
      await newUser.save();

      // saving username. Adding the user _id as a reference.
      const userProfile = new UserModel({
        username: newUser.username,
        userProfile: newUser._id,
      });
      await userProfile.save();
      res.status(201).json({
        message: 'successfully registered user',
        data: { firstname, lastname, username, email },
      });
      return;
    } else {
      res.status(400).json({ message: 'Invalid user data' });
      return;
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// is the user authorized? Check for JWT and its validity
exports.authUser = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = await AuthModel.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (
      (user?.email === email || user?.username === username) &&
      (await user.matchPassword(password))
    ) {
      generateToken(res, user._id);

      res.status(201).json({
        message: 'successfully logged in user',
        data: { username, email },
      });
    } else {
      res.status(401).json({ message: 'Invalid email/username or password' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Logout user
exports.logoutUser = async (req, res) => {
  try {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(201).json({ message: 'user logged out' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
