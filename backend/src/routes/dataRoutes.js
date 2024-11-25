const express = require('express');
const { getAllData, addData } = require('../controllers/dataController');
const router = express.Router();

router.get('/', getAllData);
router.post('/', addData);

module.exports = router;