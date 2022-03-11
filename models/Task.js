import moment from 'moment';
import { Schema, model } from 'mongoose';
import tz from 'moment-timezone';
import luxon from 'luxon';

const TaskSchema = new Schema({

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
  
  date: {         
    type:String,
  // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
  default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
  
  // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
},

});

export default model("Tasks", TaskSchema);
