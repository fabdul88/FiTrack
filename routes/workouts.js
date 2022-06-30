// Express Router
const router = require('express').Router();

const workoutsController = require('../controller/workouts');

router.get('/', workoutsController.getWorkout);
router.post('/add', workoutsController.addWorkout);
router.get('/:id', workoutsController.editWorkout);
router.patch('/update/:id', workoutsController.updateWorkout);
router.delete('/:id', workoutsController.deleteWorkout);

module.exports = router;
