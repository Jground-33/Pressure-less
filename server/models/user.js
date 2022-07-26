// User Model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  }, 
  tasks: [taskSchema]
}, {
  timestamps: true
});


const taskSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }, 
  description: String,
  importance: {
    type: Number,
    min: 1,
    max: 5
  },
  difficulty: {
    type: Number,
    min: 1,
    max: 5 
  }, 
  dueDate: Date
}, {
  timestamps: true
}) 


module.exports = mongoose.model('User', userSchema);