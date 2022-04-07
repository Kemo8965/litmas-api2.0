const express = require('express');
const router = express.Router();
const Mortalities = require('../models/Mortalities.js');



router.get('/', async (req,res)=>{
  
    res.send('Mortalities Route is grafting!');

});

//GET ALL USERS
router.get('/allMortalities', async (req,res)=>{
    try {
        const allMortalities = await Mortalities.find();
        res.json({

            status: 'Successfully retreived Mortalitiess!',
            data: allMortalities
        
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //CREATE NEW Mortalities
router.post('/addNewMortality', async (req,res) => {
    
     try {  
        const newMortality = new Mortalities({

      
            earTagID:req.body.earTagID,
            causeOfDeath:req.body.causeOfDeath,
            dateOfDeath:req.body.dateOfDeath,
            createdBy: req.body.createdBy,
            date: req.body.date
            
        });
     
        console.log(newMortality);
        
       const savedMortality = await newMortality.save();
         console.log(savedMortality);
             res.json({
                
                 Message: 'Successfully added a new Mortalities!',
                 data: savedMortality
             });
         } catch (err) {
              res.json({ message: err })
         }
});

module.exports= router