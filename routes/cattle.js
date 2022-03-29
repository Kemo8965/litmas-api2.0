const express = require('express');
const Calf = require('../models/Calf');
const router = express.Router();
const Cattle = require('../models/Cattle');
const DMR = require('../models/DMR');


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
            earTagID:   req.body.earTagID,
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
            earTagID:req.body.earTagID,
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


//GET ALL DMRS
router.get('/allDMRs', async (req,res)=>{
    try {
        const allDMRs = await DMR.find();
        res.json({

            status: 'Successfully retreived milking records!',
            data: allDMRs
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //CREATE NEW TASK
router.post('/addNewDMR', async (req,res) => {
    
     try {  
        const newDMR = new DMR({

            earTagID:req.body.earTagID,
            firstMilking:req.body.firstMilking.toFixed(2),
            secondMilking:req.body.secondMilking.toFixed(2),
            thirdMilking:req.body.thirdMilking.toFixed(2),
            milkOwner:req.body.milkOwner,
            createdBy:req.body.createdBy,
            DailyMilkingYield:(req.body.firstMilking + req.body.secondMilking + req.body.thirdMilking).toFixed(2),
            dailyEarnings:((req.body.firstMilking + req.body.secondMilking + req.body.thirdMilking) * 17.00).toFixed(2)
        });
     
        console.log(newDMR);
        
       const savedDMR = await newDMR.save();
         console.log(savedDMR);
             res.json({
                
                 Message: 'Successfully added a new milking record!',
                 data: savedDMR
             });
         } catch (err) {
              res.json({ message: err })
         }
});

module.exports= router