const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../security/middleware/auth');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

router.get('/profile', authMiddleware, userController.getUserProfile);

module.exports = router;
