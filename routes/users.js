// Express Router
const router = require('express').Router();
const usersController = require('../controller/users');

router.get('/', usersController.getUsers);
router.post('/add', usersController.addUsers);

module.exports = router;
