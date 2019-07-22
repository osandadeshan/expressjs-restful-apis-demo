'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// JSON schema for 
var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  category: {
    type: String,
    required: 'Kindly enter the category of the task'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['Pending', 'Ongoing', 'Completed']
    }],
    default: ['Pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);