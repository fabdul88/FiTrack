// Express Router
const router = require('express').Router();
const protect = require('../middleware/authMiddleware');

const workoutsController = require('../controller/workouts');

router.get('/', protect, workoutsController.getWorkout);
router.post('/add', protect, workoutsController.addWorkout);
router.get('/:id', protect, workoutsController.editWorkout);
router.patch('/update/:id', protect, workoutsController.updateWorkout);
router.delete('/:id', protect, workoutsController.deleteWorkout);

module.exports = router;
