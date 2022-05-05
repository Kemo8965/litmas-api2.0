const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');



router.get('/', async (req,res)=>{
  
    res.send('Expenses Route is grafting!');

});

//GET ALL USERS
router.get('/allExpenses', async (req,res)=>{
    try {
        const allExpenses = await Expense.find();
        res.json({

            status: 'Successfully retreived Expenses!',
            data: allExpenses
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //CREATE NEW Sale
router.post('/addNewExpense', async (req,res) => {
    
     try {  
        const newExpense = new Expense({

            expensesItem:req.body.expensesItem,
            expensesCost:req.body.expensesCost,
            expensesDate:req.body.expensesDate,
            issuedDate:req.body.date,
            createdBy: req.body.createdBy,
            
            
        });
     
        console.log(newExpense);
        
       const savedExpense = await newExpense.save();
         console.log(savedExpense);
             res.json({
                
                 Message: 'Successfully added a new Expense!',
                 data: savedExpense
             });
         } catch (err) {
              res.json({ message: err })
         }
});

module.exports= router