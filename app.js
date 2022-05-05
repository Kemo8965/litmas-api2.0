const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
require('dotenv').config();
const taskRoute = require('./routes/tasks')
const salesRoute = require('./routes/sales')
const expensesRoute = require('./routes/expenses')
const treatmentsRoute = require('./routes/treatments')
const reproductiveRecordsRoute = require('./routes/reproductive-records')
const cattleRoute = require('./routes/cattle')
const mortalitiesRoute = require('./routes/mortalities')
const app = express();
const bodyParser = require("body-parser");
// const xhr = new XMLHttpRequest();

//  app.use(cors({
//   Headers :['Content-Type:application/x-www-form-urlencoded; charset=UTF-8'],
//    origin:'*',
//    methods:['GET','POST','PUT','PATCH','OPTIONS'],
//    credentials:false,
//   // allowedHeaders: { 'Access-Control-Allow-Headers': '*'},
//   //  preflightContinue:true,
   
  
//  }))

// Headers =['Content-Type:application/json', 'Access-Control-Allow-Headers: Accept, Access-Control-Allow-Headers, Content-Type, Authorization']
app.options('/tasks', taskRoute, cors());
app.options('/auth', authRoute, cors());
app.options('/cattle', cattleRoute, cors());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/tasks', taskRoute);
app.use('/cattle', cattleRoute);
app.use('/mortalities', mortalitiesRoute);
app.use('/sales', salesRoute);
app.use('/expenses', expensesRoute);
app.use('/treatments', treatmentsRoute);
app.use('/reproductiveRecords', reproductiveRecordsRoute);
app.use('/auth', authRoute);

// Default Route
app.get('/', (req,res) =>{
   
  res.send('Server is Working!')
});

const conn = mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true });

const port = process.env.PORT || 5009 ;
if (port == null || port == "") {
    port= 5008;
}

app.listen(port, () =>
    console.log(`Server listening on port ${port}`));

module.exports = app;
