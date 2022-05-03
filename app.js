const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
require('dotenv').config();
const taskRoute = require('./routes/tasks')
const salesRoute = require('./routes/sales')
const treatmentsRoute = require('./routes/treatments')
const reproductiveRecordsRoute = require('./routes/reproductive-records')
const cattleRoute = require('./routes/cattle')
const mortalitiesRoute = require('./routes/mortalities')
const app = express();
const bodyParser = require("body-parser");
// var xhr = new XMLHttpRequest();

  // let corsOptions = {
   
  //   setHeader: ("Access-Control-Allow-Origin",'*'),
  //   // setHeader:("Access-Control-Allow-Credentials", "true"),
  //   // setHeader:("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, PATCH"),
  //   // setHeader:("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Access-Control-Request-Method, Access-Control-Request-Headers")

  // };

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", [ 'https://litmas.netlify.app', 'http://localhost:3000' ]);
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE,OPTIONS");
//   next();
// });

// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//  // res.append('Access-Control-Allow-Headers', 'Content-Type','Authorization');
//   next();
// });

// app.use((cors(), (req, res, next) => {
//   // res.append('Access-Control-Allow-Origin', '*');
//   // res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   // res.append('Access-Control-Allow-Headers', 'Content-Type','Authorization');

//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, , Access-Control-Request-Method, Access-Control-Request-Headers");


  
// }));

app.use(cors({
  origin:'*',
  methods:['GET','POST','PUT','PATCH','OPTIONS'],
  credentials:true,
  allowedHeaders: ['Content-Type', 'Access-Control-Allow-Headers', 'origin','Accept', 'X-Requested-With' , 'Access-Control-Request-Method', 'Access-Control-Request-Headers']
}))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/tasks', taskRoute);
app.use('/cattle', cattleRoute);
app.use('/mortalities', mortalitiesRoute);
app.use('/sales', salesRoute);
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
