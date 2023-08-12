// Express Router
const router = require('express').Router();
const usersController = require('../controller/users');
const protect = require('../middleware/authMiddleware');

router.get('/', protect, usersController.getUser);
// router.post('/add', protect, usersController.addUsers);

module.exports = router;
