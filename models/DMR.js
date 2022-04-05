const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone');
const { number } = require('@hapi/joi');


const DMR = new mongoose.Schema({

 earTagID: {
    type: String,
    required: true,
    
  },
 
  firstMilking: {
    type: Number,
    required: true,
   
  },

  secondMilking: {
    type: Number,
    required: true,
   
  },
 
 
  thirdMilking: {
    type: Number,
    required: true,
   
  },

  milkOwner:{
    type: String
  },

  createdBy:{
    type: String
  },

  buyer:{
    zambeef:{
      type:String,
      default: 'Zambeef'
    },

    dairyGold:{
      type:String,
      default: 'Dairy Gold'
    },

    parmalat:{
      type:String,
      default: 'Parmalat'
    },

    lactails:{
      type:String,
      default: 'Lactails'
    },


  },
  
  DailyMilkingYield:{
    type: Number
  },

  dailyEarnings:{
    type: Number
  },

  DailyFeedAllocation:{
    type: Number
  },

  
  // parmalatDailyEarnings:{
  //   type: Number
  // },

  
  // lactailsDailyEarnings:{
  //   type: Number
  // },

  
  // dairyGoldDailyEarnings:{
  //   type: Number
  // },
  
  date: {         
    type:String,
  // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
  default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
  
  // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
}

});

module.exports = mongoose.model("Daily Milking Records", DMR);
