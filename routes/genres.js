const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genres');

router.get('/', genresController.index);

router.get('/:genre', genresController.show);

module.exports = router;
