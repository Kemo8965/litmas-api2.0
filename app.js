const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
require('dotenv').config();
const taskRoute = require('./routes/tasks')
const cattleRoute = require('./routes/cattle')
const app = express();
const bodyParser = require("body-parser")


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/tasks', taskRoute);
app.use('/cattle', cattleRoute);
app.use('/auth', authRoute);

// Default Route
app.get('/', (req,res) =>{
   
  res.send('Server is Working!')
});

const conn = mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true });

const port = process.env.PORT || 80 ;
if (port == null || port == "") {
    port= 5008;
}

app.listen(port, () =>
    console.log(`Server listening on port ${port}`));

module.exports = app;
