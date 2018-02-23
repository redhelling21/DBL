var express = require('express');
var router = express.Router();
var taskRouter = require('./task');

router.use('/tasks', taskRouter);
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});

module.exports = router;
