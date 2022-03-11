const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')


const Cattle = new mongoose.Schema({

  cattleBreed: {
    type: String,
    required: true,
    
  },
 
  cattleDateOfBirth: {
    type: Date,
    required: true,
   
  },

  datePurchased: {
    type: Date,
    required: true,
   
  },
 
 
  cattleSex: {
    type: String,
    required: true,
   
  },

  cattleWeight: {
    type: String,
    required: true,
    
  },
 
 
  supplierName: {
    type: String,
    required: true,
   
  },

  earTagColor: {
    type: String,
    required: true,
   
  },

  cattleStatus: {
    type: String,
    required: true,
   
  },
  
  date: {         
    type:String,
  // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
  default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
  
  // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
}

});

module.exports = mongoose.model("Cattle", Cattle);