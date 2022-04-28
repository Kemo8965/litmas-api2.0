const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')


const Tasks = new mongoose.Schema({

  taskDescription: {
    type: String,
    required: true,
    
  },
 
  selectPriority: {
    type: String,
    required: true,
   
  },
 
 
  assignTask: {
    type: String,
    required: true,
   
  },

  dateAssigned: {
    type: String,
    required: true,
   
  },

  dueDate: {
    type: String,
    required: true,
   
  },

  createdBy:{
    type: String
  },

  status:{
    type:String,
    default: 'Pending'
  },
  
  date: {         
    type:String,
  // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
  default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
  
  // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
}

});

module.exports = mongoose.model("Tasks", Tasks);
