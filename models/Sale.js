const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')


const Sales = new mongoose.Schema({

  totalAmountInLitres: {
        type: Number,
        required: true,
    
  },
 
  sellingPrice: {
    type: Number,
    required: true,
   
  },

  sellingDate: {
    type: Number,
    required: true,
   
  },
 
 
 
  createdBy:{
    type: String
  },

  totalDailyEarnings:{
    type: Number
  },
  
  date: {         
    type:String,
  // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
 // default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
  
  // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
}

});

module.exports = mongoose.model("Sales Records", Sales);
