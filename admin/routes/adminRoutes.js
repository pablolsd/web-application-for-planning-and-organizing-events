const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/dashboard', adminController.dashboard);
router.get('/manage/users', adminController.manageUsers);
router.get('/manage/events', adminController.manageEvents);

module.exports = router;
