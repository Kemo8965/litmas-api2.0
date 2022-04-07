const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')


const Mortalities = new mongoose.Schema({

 earTagID: {
    type: String,
    required: true,
    
  },
 
  causeOfDeath: {
    type: String,
    required: true,
   
  },
 
 
  dateOfDeath: {
    type: Date,
    required: true,
    default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 

   
  },

  createdBy:{
    type: String
  },
  
  date: {         
    type:String,
  // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
  default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
  
  // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
}

});

module.exports = mongoose.model("Mortalities Records", Mortalities);
