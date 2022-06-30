// requiring Workout mongoose model
let Workout = require('../models/workout.model');

exports.getWorkout = (req, res) => {
  Workout.find()
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => res.status(400).json(err));
};

exports.addWorkout = async (req, res) => {
  const { username, description, duration, date } = req.body;

  // creating a new instance of Workout using username, description,duration and date
  const newWorkout = new Workout({ username, description, duration, date });

  try {
    // saving newExercise to mongoDB
    await newWorkout.save();
    res.status(201).json('Added Workout');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.editWorkout = (req, res) => {
  // Getting user by id during an edit
  Workout.findById(req.params.id)
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err));
};

exports.updateWorkout = (req, res) => {
  // Editing / updating a user workout
  Workout.findById(req.params.id)
    .then((workout) => {
      workout.username = req.body.username;
      workout.description = req.body.description;
      workout.duration = Number(req.body.duration);
      workout.date = Date.parse(req.body.date);

      workout
        .save()
        .then(() => res.json('workout Updated'))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
};

exports.deleteWorkout = (req, res) => {
  const id = req.params.id;
  Workout.findByIdAndDelete(id)
    .then(() => res.json('workout Deleted'))
    .catch((err) => res.status(400).json(err));
};
