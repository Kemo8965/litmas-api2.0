const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')


const Calf = new mongoose.Schema({

  calfBreed: {
    type: String,
    required: true,
    
  },
 
  calfDateOfBirth: {
    type: String,
    required: true,
  //  default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
   
  },

  sire: {
    type: String,
    required: true,
    
  },

  dam: {
    type: String,
    required: true,
    
  },
 
 
 
  calfSex: {
    type: String,
    required: true,
   
  },

  calfWeight: {
    type: String,
    required: true,
    
  },
 

  earTagColor: {
    type: String,
    required: true,
   
  },

  earTagID: {
    type: String,
    required: true,
   
  },

  calfColor:{
    type:String,
    required: true
  },

  calfStatus: {
    type: String,
    required: true,
   
  },

  calfRemarks: {
    type: String,
    required: true,
   
  },

  
  createdBy:{
    type: String
  },
  
  age:{
    type: String,
   
  },

  stage:{
    type: String
  },

  date: {         
    type:String,
  // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
  //default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
  
  // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
}

});

module.exports = mongoose.model("Calves", Calf);
