const express = require('express');
const router = express.Router();
const bandsController = require('../controllers/bands');

router.get('/', bandsController.index);
router.get('/id/:id', bandsController.show);

module.exports = router;
