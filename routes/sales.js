const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');



router.get('/', async (req,res)=>{
  
    res.send('Sales Route is grafting!');

});

//GET ALL USERS
router.get('/allSales', async (req,res)=>{
    try {
        const allSales = await Sale.find();
        res.json({

            status: 'Successfully retreived Sales!',
            data: allSales
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //CREATE NEW Sale
router.post('/addNewSale', async (req,res) => {
    
     try {  
        const newSale = new Sale({

            totalAmountInLitres:req.body.totalAmountInLitres,
            sellingPrice:req.body.sellingPrice,
            sellingDate:req.body.sellingDate,
            issuedDate:req.body.date,
            createdBy: req.body.createdBy,
            totalDailyEarnings: (req.body.totalAmountInLitres * req.body.sellingPrice).toFixed(2)
            
        });
     
        console.log(newSale);
        
       const savedSale = await newSale.save();
         console.log(savedSale);
             res.json({
                
                 Message: 'Successfully added a new Sale!',
                 data: savedSale
             });
         } catch (err) {
              res.json({ message: err })
         }
});

module.exports= router