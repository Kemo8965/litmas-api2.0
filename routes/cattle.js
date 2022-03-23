const express = require('express');
const Calf = require('../models/Calf');
const router = express.Router();
const Cattle = require('../models/Cattle');


router.get('/', async (req,res)=>{
  
    res.send('Cattle Route is grafting!');

});

//GET ALL USERS
router.get('/allCattle', async (req,res)=>{
    try {
        const allCattle = await Cattle.find();
        res.json({

            status: 'Successfully retreived all cattle!',
            data: allCattle
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //ADD NEW CATTLE
router.post('/addNewCattle', async (req,res) => {
    
     try {  
        const newCattle = new Cattle({

            cattleBreed:req.body.cattleBreed,
            cattleDateOfBirth:req.body.cattleDateOfBirth,
            datePurchased:req.body.datePurchased,
            cattleSex:req.body.cattleSex,
            cattleWeight:req.body.cattleWeight,
            earTagColor:req.body.earTagColor,
            supplierName:req.body.supplierName,
            cattleStatus:req.body.cattleStatus,
            createdBy: req.body.createdBy
           
            
        });
     
        console.log(newCattle);
        
       const savedCattle = await newCattle.save();
         console.log(savedCattle);
             res.json({
                
                 Message: 'Successfully added new cattle!',
                 data: savedCattle
             });
         } catch (err) {
              res.json({ message: err })
         }
});

// ---------------------------------------C A L V E S-------------------------------------------------//

//GET ALL CALVES
router.get('/allCalves', async (req,res)=>{
    try {
        const allCalves = await Calf.find();
        res.json({

            status: 'Successfully retreived all cattle!',
            data: allCalves
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //ADD NEW CATTLE
router.post('/addNewCalf', async (req,res) => {
    
     try {  
        const newCalf = new Calf({

            calfBreed:req.body.calfBreed,
            calfDateOfBirth:req.body.calfDateOfBirth,
            sire:req.body.sire,
            dam:req.body.dam,
            calfSex:req.body.calfSex,
            calfWeight:req.body.calfWeight,
            earTagColor:req.body.earTagColor,
            calfStatus:req.body.calfStatus,
            createdBy: req.body.createdBy
           
            
        });
     
        console.log(newCalf);
        
       const savedCalf = await newCalf.save();
         console.log(savedCalf);
             res.json({
                
                 Message: 'Successfully added new calf!',
                 data: savedCalf
             });
         } catch (err) {
              res.json({ message: err })
         }
});

module.exports= router