const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')


const Treatments = new mongoose.Schema({

  earTagID: {
    type: String,
    required: true,
    
  },
 
  symptomsDisplayed: {
    type: String,
    required: true,
   
  },
 
 
  diagnosis: {
    type: String,
    required: true,
   
  },

  drugsAdministered: {
    type: String,
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

module.exports = mongoose.model("Treatments Records", Treatments);
