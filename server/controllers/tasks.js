const Task = require('../models/task');

module.exports = {
  index,
  createTask
};

async function index(req, res) {
    // let user = await User.findById(req.params.userid)
    let tasks = await Task.find({});
    res.json(tasks);
};

async function createTask(req, res) {
  console.log(req.body);
  let task = await Task.create(req.body);
  let saved = await task.save();
  res.json(saved);
};

async function updateTask(req, res) {
  let task = await Task.findById(req.params.id);  
};
