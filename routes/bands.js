var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Mostrar listado de las bandas');
});

router.get('/id/:id', function(req, res, next) {
  res.send('Mostrar banda segun ID');
});

module.exports = router;
