// requiring Workout and User mongoose model
let WorkoutModel = require('../models/workout.model');
let UserModel = require('../models/user.model');

exports.getWorkout = async (req, res) => {
  const { _id } = req.user;
  console.log(req.user);
  try {
    const userWorkouts = await UserModel.findOne({
      userProfile: _id,
    }).populate({
      path: 'workouts',
      options: { sort: { createdAt: -1 } },
    });

    res.status(200).json(userWorkouts);
  } catch (error) {
    res.status(400).json(error);
  }

  // WorkoutModel.find()
  //   .sort({ createdAt: 'desc' })
  //   .then((workouts) => {
  //     // if (workouts?.userId === currentUserId) {
  //     res.json(workouts);
  //     // }
  //   })
  // UserModel.aggregate([{ $match: { userProfile: currentUserId } }])
  //   .sort({ createdAt: 'desc' })
  //   .then((workouts) => {
  //     console.log('backend----------------', workouts);
  //     res.send(workouts);
  //   })
  // .catch((err) => res.status(400).json(err));
};

exports.addWorkout = async (req, res) => {
  console.log('ADD WORKOUT TEST>>>', req.body);
  // current user
  const { _id } = req.user;
  const { username, description, duration, date } = req.body;

  try {
    // Find the username POSTED in the user collection
    const user = await UserModel.findOne({ userProfile: _id });

    // creating a new instance of the WorkoutModel using the destructured form data. Here we also add the username _id, to reference the user document.
    const newWorkout = new WorkoutModel({
      username,
      description,
      duration,
      date,
      userId: user._id,
      currentUser: _id,
    });

    // save newWorkout to mongoDB
    await newWorkout.save();

    // Get the last document added in the workout collection.
    const lastWorkoutDocument = await WorkoutModel.find()
      .limit(1)
      .sort({ $natural: -1 });

    console.log(
      'LAST WORKOUT:>>>>>>>>',
      lastWorkoutDocument,
      'LAST USER:>>>>>>>>>>>',
      user
    );

    // update the user document with the workout _id obtained, as a reference.
    await UserModel.findByIdAndUpdate(
      user._id,

      { $addToSet: { workouts: lastWorkoutDocument[0]._id } },

      { runValidators: true, new: true }
    )
      .then((doc) => {
        console.log('Successfully found by Id and updated >>>>>>>', doc);
      })
      .catch((err) => {
        throw new Error('FAILED TO FIND BY ID AND UPDATE >>>>', err);
      });

    res.status(201).json({
      message: 'Added a new workout, and associated it to the user',
      data: req.body,
    });
  } catch (error) {
    throw new Error('FAILED TO ADD A WORKOUT >>>> ', error);
  }
};

exports.editWorkout = (req, res) => {
  // Getting user by id during an edit
  WorkoutModel.findById(req.params.id)
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err));
};

exports.updateWorkout = (req, res) => {
  // current user
  const { _id } = req.user;
  // Editing / updating a user workout
  WorkoutModel.findById(req.params.id)
    .then((workout) => {
      console.log('frontend edit', req.body);
      workout.username = req.body.username;
      workout.description = req.body.description;
      workout.duration = Number(req.body.duration);
      workout.date = Date.parse(req.body.date);
      workout.currentUser = _id;

      workout
        .save()
        .then(() => res.json('workout Updated'))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
};

exports.deleteWorkout = (req, res) => {
  const id = req.params.id;
  WorkoutModel.findByIdAndDelete(id)
    .then(() => res.json('workout Deleted'))
    .catch((err) => res.status(400).json(err));
};
