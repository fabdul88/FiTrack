// Express Router
const router = require("express").Router();
// requiring User mongoose model
let User = require("../models/user.model");

// Route endpoint handling incoming http get request on the /users url path
router.route("/").get((_req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
});

// Route endpoint handling incoming http post request on the /users/add url path
router.route("/add").post((req, res) => {
  // creating a new instance of User using username
  const newUser = new User(req.body);

  // saving newUSer to mongoDB
  newUser
    .save()
    .then(() => res.json("added User"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
