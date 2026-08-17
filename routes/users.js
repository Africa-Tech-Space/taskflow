const express = require('express');
const router = express.Router();
const { readDB } = require('../db');

// GET /users
router.get('/', async (req, res) => {
  const db = await readDB();
  res.json(db.users);
});

module.exports = router;
