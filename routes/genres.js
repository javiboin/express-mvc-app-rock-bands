var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Mostrar listado de generos musicales');
});

router.get('/:genre', function(req, res, next) {
  res.send('Mostrar bandas segun genero musical');
});

module.exports = router;
