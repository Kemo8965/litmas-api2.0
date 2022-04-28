const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const User = require('../models/User');


router.get('/', async (req,res)=>{
  
    res.send('Tasks Route is grafting!');

});

//GET ALL USERS
router.get('/allTasks', async (req,res)=>{
    try {
        const allTasks = await Task.find();
        res.json({

            status: 'Successfully retreived tasks!',
            data: allTasks
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //CREATE NEW TASK
router.post('/addNewTask', async (req,res) => {
    
     try {  
        const newTask = new Task({

            taskDescription:req.body.taskDescription,
            selectPriority:req.body.selectPriority,
            assignTask:req.body.assignTask,
            assignedDate:req.body.dateAssigned,
            dueDate:req.body.dueDate,
            issuedDate:req.body.date,
            status:req.body.status,
            createdBy: req.body.createdBy
            
        });
     
        console.log(newTask);
        
       const savedTask = await newTask.save();
         console.log(savedTask);
             res.json({
                
                 Message: 'Successfully added a new task!',
                 data: savedTask
             });
         } catch (err) {
              res.json({ message: err })
         }
});


//--------UPDATE A PERMIT APPLICATION------//
router.put('/completeTask/:id', async (req,res,next )=>{
    try {
        const completedTask = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(){
            Task.findOne({ _id: req.params.id }).then(function(){
                res.json({

                    status: 'Successfully marked as complete!',
                    data: completedTask
                    
                })
            })
        })
       
 
    } catch (error) {
        res.json({ message: error})
    }
 });

module.exports= router