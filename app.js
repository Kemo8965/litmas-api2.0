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


//  app.options('*', cors({
  
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "allowedHeaders":"*",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204,
  
//  }));

 app.options('*', cors());
 app.options('*', function (req,res) { res.sendStatus(200); });

//  app.options('/*', (_, res) => {
//   res.sendStatus(200);
// });

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
