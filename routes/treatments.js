const express = require('express');
const router = express.Router();
const Treatment = require('../models/Treatment');



router.get('/', async (req,res)=>{
  
    res.send('Treatments Route is grafting!');

});

//GET ALL USERS
router.get('/allTreatments', async (req,res)=>{
    try {
        const allTreatments = await Treatment.find();
        res.json({

            status: 'Successfully retreived Treatments!',
            data: allTreatments
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //CREATE NEW Treatment
router.post('/addNewTreatment', async (req,res) => {
    
     try {  
        const newTreatment = new Treatment({

            
            earTagID:req.body.earTagID,
            symptomsDisplayed:req.body.symptomsDisplayed,
            diagnosis:req.body.diagnosis,
            drugsAdministered:req.body.drugsAdministered, 
            withdrawalPeriod:req.body.withdrawalPeriod,       
            issuedDate:req.body.date,
            createdBy: req.body.createdBy
            
        });
     
        console.log(newTreatment);
        
       const savedTreatment = await newTreatment.save();
         console.log(savedTreatment);
             res.json({
                
                 Message: 'Successfully added a new Treatment!',
                 data: savedTreatment
             });
         } catch (err) {
              res.json({ message: err })
         }
});

module.exports= router