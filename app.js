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
const bodyParser = require("body-parser")

 let corsOptions = {
   origin: [ 'https://litmas.netlify.app', 'http://localhost:3000' ],
   setHeader: ("Access-Control-Allow-Origin", [ 'https://litmas.netlify.app', 'http://localhost:3000' ]),
   setHeader:("Access-Control-Allow-Credentials", "true"),
   setHeader:("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, PATCH"),
   setHeader:("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Access-Control-Request-Method, Access-Control-Request-Headers")

 };

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", [ 'https://litmas.netlify.app', 'http://localhost:3000' ]);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE,OPTIONS");
  next();
});

app.use(cors(corsOptions));
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
