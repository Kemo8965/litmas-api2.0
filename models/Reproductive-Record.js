const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')


const ReproductiveRecords = new mongoose.Schema({

  earTagID: {
    type: String,
    required: true,
    
  },
 
  ageAtFirstCalving: {
    type: String,
    required: true,
   
  },
 
 
  numberOfServicesPerInsemination: {
    type: Number,
    required: true,
   
  },

  calvingInterval: {
    type: Number,
    required: true,
   
  },

  calvingEaseIndex: {
    type: Number,
    required: true,
   
  },

  abortionsPerLifecycle: {
    type: Number,
    required: true,
   
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

module.exports = mongoose.model("Reproductive Records", ReproductiveRecords);
