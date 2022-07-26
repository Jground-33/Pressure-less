var express = require('express');
var router = express.Router();
var tasksCtrl = require('../controllers/tasks') 

// returns all tasks from users list per filters > move filter and sort features to ../controllers 
router.get('/tasks', tasksCtrl.index);
router.post('/tasks', tasksCtrl.createTask);

module.exports = router;
