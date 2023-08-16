const router = require('express').Router();
const authController = require('../controller/auth');

router.post('/register', authController.registerUsers);
router.post('/login', authController.authUser);
router.post('/logout', authController.logoutUser);

module.exports = router;
