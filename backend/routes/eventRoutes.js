const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../security/middleware/auth');
const adminAccessMiddleware = require('../security/middleware/adminAccess');

router.post('/', authMiddleware, eventController.createEvent);
router.get('/:id', eventController.getEventById);

router.get('/admin/dashboard', authMiddleware, adminAccessMiddleware, eventController.adminDashboard);

module.exports = router;
