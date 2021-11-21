// Express Router
const router = require("express").Router();
// requiring Workout mongoose model
let Workout = require("../models/workout.model");

// Route endpoint handling incoming http get request on the /workouts url path
router.route("/").get((_req, res) => {
  Workout.find()
    .then((workouts) => res.json(workouts))
    .catch((err) => res.status(400).json(err));
});

// Route endpoint handling incoming http post request on the /workouts/add url path
router.route("/add").post((req, res) => {
  // creating a new instance of Workout using username, description,duration and date
  const newWorkout = new Workout(req.body);

  // saving newExercise to mongoDB
  newWorkout
    .save()
    .then(() => res.json("Added Workout"))
    .catch((err) => res.status(400).json(err));
});

// Getting user by id during an edit
router.route("/:id").get((req, res) => {
  Workout.findById(req.params.id)
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err));
});

// deleting a user Workout
router.route("/:id").delete((req, res) => {
  const id = req.params.id;
  Workout.findByIdAndDelete(id)
    .then(() => res.json("workout Deleted"))
    .catch((err) => res.status(400).json(err));
});

// Editing / updating a user workout
router.route("/update/:id").post((req, res) => {
  Workout.findById(req.params.id)
    .then((workout) => {
      workout.username = req.body.username;
      workout.description = req.body.description;
      workout.duration = Number(req.body.duration);
      workout.date = Date.parse(req.body.date);

      workout
        .save()
        .then(() => res.json("workout Updated"))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
