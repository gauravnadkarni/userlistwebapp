var express = require('express');
var router = express.Router();

let repo = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.post('/users', function(req, res, next) {
  repo.push(req.body);
  res.status(201);
  res.json({message:'created'});
});

module.exports = router;
