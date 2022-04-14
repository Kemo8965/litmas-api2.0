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
            cattleColor:req.body.cattleColor,
            supplierName:req.body.supplierName,
            cattleStatus:req.body.cattleStatus,
            cattleRemarks:req.body.cattleRemarks,
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

       console.log(allCalves[0].data.calfDateOfBirth)
        
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
        var userinput = req.body.calfDateOfBirth;
        var dob = new Date(userinput);
        
        //check user provide input or not
        if(userinput==null || userinput==''){
          console.log ("**Choose a date please!");  
         // return false; 
        } 
    
    //extract the year, month, and date from user date input
    var dobYear = dob.getYear();
    console.log(dobYear)
    var dobMonth = dob.getMonth();
    console.log(dobMonth)
    var dobDate = dob.getDate();
    console.log(dobDate)
    
    
    //get the current date from the system
    var now = new Date();
    //extract the year, month, and date from current date
    var currentYear = now.getYear();
    console.log(currentYear)
    var currentMonth = now.getMonth();
    console.log(currentMonth)
    var currentDate = now.getDate();
    console.log(currentDate)
    
     //declare a variable to collect the age in year, month, and days
     var age = {};
     var ageString = "";
     var stage = "";
     var stageString= "";
     //get years
     yearAge = currentYear - dobYear;
        
     //get months
     if (currentMonth >= dobMonth)
       //get months when current month is greater
       var monthAge = currentMonth - dobMonth;
     else {
       yearAge--;
       var monthAge = 12 + currentMonth - dobMonth;
     }
    
    
     //get days
     if (currentDate >= dobDate)
     //get days when the current date is greater
     var dateAge = currentDate - dobDate;
    else {
     monthAge--;
     var dateAge = 31 + currentDate - dobDate;
    
     if (monthAge < 0) {
       monthAge = 11;
       yearAge--;
     }
    }
    //group the age in a single variable
    age = {
    years: yearAge,
    months: monthAge,
    days: dateAge
    };

    stage = {
        years: yearAge,
        months: monthAge,
        days: dateAge
        };
    
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old. " + " Bulling Heifer Stage";
    
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageString = "Only " + age.days + " days old! ";
    //when current month and date is same as birth date and month
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years +  " years old. Happy Birthday.";

    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + " years and " + age.months + " months old. ";


    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + " months and " + age.days + " days old.";


    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + " months and " + age.days + " days old.";

    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + " years, and " + age.days + " days old. ";

    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.months + " months old. ";
    //when current date is same as dob(date of birth)
    else ageString = "Welcome to Earth! <br> It's first day on Earth!"; 
    
    //display the calculated age
    console.log(ageString); 
    age = ageString
    //----------------------------------------- P R O D U C T I O N  S T A G E-------------------------------------------------------//
     
    if ( (stage.years > 0) && (stage.months > 0) && (stage.days > 0) )
    stageString = "Bulling Heifer Stage";
    else if ( (stage.years == 0) && (stage.months == 0) && (stage.days > 0) )
    stageString = "Still a Calf";
    //when current month and date is same as birth date and month
    else if ( (stage.years > 0) && (stage.months == 0) && (stage.days == 0) )
    stageString = "Now a Bulling Heifer";
    else if ( (stage.years > 0) && (stage.months > 0) && (stage.days == 0) )
    stageString = "Bulling Heifer Stage";


    else if ( (stage.years == 0) && (stage.months >= 0) && (stage.months <= 2) && (stage.days > 0) )
    stageString = "Calf Stage";

    else if ( (stage.years == 0) && (stage.months >= 2) && (stage.months <= 6) && (stage.days > 0) )
    stageString = "Weaner Stage";

    else if ( (stage.years == 0) && (stage.months >= 6) && (stage.months <= 13) && (stage.days > 0) )
    stageString = "Yearling Stage";

    else if ( (stage.years == 0) && (stage.months >= 13) && (stage.days > 0) )
    stageString = "Bulling Heifer Stage";

    else if ( (stage.years > 0) && (stage.months == 0) && (stage.days > 0) )
    stageString = "Bulling Heifer Stage";

    else if ( (stage.years == 0) && (stage.months >= 0) && (stage.months <= 2) && (stage.days == 0) )
    stageString = "Calf Stage";
    //when current date is same as dob(date of birth)
    else stageString = "Welcome to Earth! <br> It's first day on Earth!"; 
    console.log(stageString); 
    stage = stageString

        const newCalf = new Calf({

            calfBreed:req.body.calfBreed,
            calfDateOfBirth:req.body.calfDateOfBirth,
            sire:req.body.sire,
            dam:req.body.dam,
            calfSex:req.body.calfSex,
            calfWeight:req.body.calfWeight,
            earTagID:req.body.earTagID,
            earTagColor:req.body.earTagColor,
            calfColor:req.body.calfColor,
            calfStatus:req.body.calfStatus,
            calfRemarks:req.body.calfRemarks,
            createdBy: req.body.createdBy,
            age:ageString,
            stage:stageString,

            
           
            
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

 router.get('/allDMRsByEarTagID', async (req,res)=>{
    try {
        console.log(req.query.earTagID);

        const allDMRs = await DMR.find({earTagID: req.query.earTagID});

      
        
        res.json({

            status: 'Successfully retreived milking records!',
            data: allDMRs
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //CREATE NEW DAILY MILKING RECORD
router.post('/addNewDMR', async (req,res) => {
    
     try {  
         
        const newDMR = new DMR({
            
            earTagID:req.body.earTagID,
            firstMilking:req.body.firstMilking.toFixed(2),
            secondMilking:req.body.secondMilking.toFixed(2),
            thirdMilking:req.body.thirdMilking.toFixed(2),
            milkOwner:req.body.milkOwner,
            createdBy:req.body.createdBy,
            date:req.body.date,
           // buyer:req.body.buyer,
            DailyMilkingYield:(req.body.firstMilking + req.body.secondMilking + req.body.thirdMilking).toFixed(2),
            dailyEarnings:((req.body.firstMilking + req.body.secondMilking + req.body.thirdMilking) * 10.00).toFixed(2),
            DailyFeedAllocation: ((req.body.firstMilking + req.body.secondMilking + req.body.thirdMilking)*0.5).toFixed(2)
            // dairyGoldDailyEarnings:((req.body.firstMilking + req.body.secondMilking + req.body.thirdMilking) * 10.00).toFixed(2),
            // parmalatDailyEarnings:((req.body.firstMilking + req.body.secondMilking + req.body.thirdMilking) * 6.40).toFixed(2),
            // lactailsDailyEarnings:((req.body.firstMilking + req.body.secondMilking + req.body.thirdMilking) * 6.40).toFixed(2),

            
            
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