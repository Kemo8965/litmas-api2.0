const express = require('express');
const router = express.Router();
const ReproductiveRecord = require('../models/Reproductive-Record');
const User = require('../models/User');


router.get('/', async (req,res)=>{
  
    res.send('Reproductive Records Route is grafting!');

});

//GET ALL USERS
router.get('/allReproductiveRecords', async (req,res)=>{
    try {
        const allReproductiveRecords = await ReproductiveRecord.find();
        res.json({

            status: 'Successfully retreived Reproductive Records!',
            data: allReproductiveRecords
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //CREATE NEW ReproductiveRecord
router.post('/addNewReproductiveRecord', async (req,res) => {
    
     try {  
        const newReproductiveRecord = new ReproductiveRecord({

            earTagID:req.body.earTagID,
            ageAtFirstCalving:req.body.ageAtFirstCalving,
            numberOfServicesPerInsemination:req.body.numberOfServicesPerInsemination,         
            calvingInterval:req.body.calvingInterval,
            calvingEaseIndex:req.body.calvingEaseIndex,
            abortionsPerLifecycle:req.body.abortionsPerLifecycle,
            createdBy:req.body.createdBy
            
        });
     
        console.log(newReproductiveRecord);
        
       const savedReproductiveRecord = await newReproductiveRecord.save();
         console.log(savedReproductiveRecord);
             res.json({
                
                 Message: 'Successfully added a new Reproductive Record!',
                 data: savedReproductiveRecord
             });
         } catch (err) {
              res.json({ message: err })
         }
});

module.exports= router