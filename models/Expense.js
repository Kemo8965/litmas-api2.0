const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')


const Expenses = new mongoose.Schema({

  expensesItem: {
        type: String,
        required: true,
    
  },
 
  expensesCost: {
    type: Number,
    required: true,
   
  },

  expensesDate: {
    type: String,
    required: true,
   
  },
 
 
 
  createdBy:{
    type: String
  },


  
  date: {         
    type:String,
  // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
 // default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
  
  // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
}

});

module.exports = mongoose.model("Expenses Records", Expenses);
