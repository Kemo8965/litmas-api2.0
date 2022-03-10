const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const taskRoute = require('./routes/tasks')
const app = express();


app.use(express.json());
app.use('/tasks', taskRoute);

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
