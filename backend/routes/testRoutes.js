const express = require('express');
const router = express.Router();

router.get('/shutdown', (req, res) => {
  process.exit(0);
});

router.get('/test', (req, res) => {
  res.json({ message: 'Test successful' });
});

module.exports = router;
