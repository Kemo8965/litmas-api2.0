const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const app = express();

app.use(cors());

router.get('/', async (req,res)=>{
  
       res.send('Authentication Route is grafting');

});

//GET ALL USERS
router.get('/allUsers', async (req,res)=>{
    try {
        
        const usersAdmin = await User.find();
        res.json({

            status: 'Successfully retreived users!',
            data: usersAdmin
           
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //GET  USER
router.get('/User/:id', async (req,res)=>{
  try {
      
      const user = await User.findById({userID: req.params.userID});
      res.json({

          status: 'Successfully retreived user!',
          data: user
         
      })

    

      

  } catch (error) {
      res.json({ message: error})
  }
});


 
  //LOGIN  USERS
    router.options('/login',cors());

    router.post('/login', async (req,res)=>{
         
    //    // Headers =['Content-Type:application/json', 'Access-Control-Allow-Headers: Accept, Access-Control-Allow-Headers, Content-Type, Authorization']
    //     const headers = {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization, Accept',
    //         'Access-Control-Allow-Methods': '*',
    //         "Content-Type": "application/x-www-form-urlencoded; multipart/form-data; text/plain",
    //         "Accept": "application/json, text/plain, */*"
    //       };
        
     

      const user = await User.findOne({ email: req.body.email});

      console.log(user);

      var date = new Date();
      const firstDay = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      const lastDay = new Date(date.getUTCFullYear() + 1, date.getUTCMonth(), date.getUTCDate());

    

      console.log(firstDay);
      console.log(lastDay);

    //  if (req.body.paymentStatus === 'Paid') {

      if(!user) return res.status(400).send('Email is not found');

      const validPass = await bcrypt.compare(req.body.password, user.password);
      if(!validPass) return res.status(400).send('Password is invalid');

      
      if (user.paymentStatus ==='Paid') {
        
      
       

        const token = jwt.sign({ userID: user.userID },`${ process.env.TOKEN_SECRET}`);
       
        res.header('auth-token',token).send({ message: `Logged in as ${req.body.email} !`,
          status:200,
          name:user.name,
          email:user.email,
          userID:user.userID,
          subscriptionPlan:user.subscriptionPlan, 
          billingCycle:user.billingCycle, 
          paymentStatus:user.paymentStatus, 
          startDate:firstDay.toLocaleDateString(),
          endDate:lastDay.toLocaleDateString(),
          token:token });
         
       //   res.status(200).send("OK"); 
      // res.send('Logged In ');
        


      const {error}= loginValidation(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      
       } else {
          return res.status(500).json({
          message: 'Cannot login because you have not yet subscribed or your subscription has not yet been renewed. Please renew and try again.',
          
          })
        }
      
        

       
     
    });

    
//--------UPDATE A PAYMENT STATUS------//
router.options('/activateUser/:id',cors());

router.put('/activateUser/:id', async (req,res,next )=>{
  try {
      const activeUser = await User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(){
          User.findOne({ _id: req.params.id }).then(function(){
              res.json({

                  status: 'Successfully activated user!',
                  data: activeUser
                  
              })
          })
      })
     

  } catch (error) {
      res.json({ message: error})
  }
});



    //LOGOUT USER

    router.options('/logout',cors());

    router.get('/logout', async (req,res) => {
        res.header('auth-token', '', { maxAge: 1 });
        //res.sendStatus(200);
        res.redirect('/auth/login');
    });


    

      //-------------------------REGISTER USERS-----------------------------------------
      //REGISTER USER
    router.post('/register', async (req,res)=>{
      const {error}= registerValidation(req.body);
     if (error) return res.status(400).send(error.details[0].message);

  //CHECK IF EMAIL ALREADY EXISTS
     const emailExist = await User.findOne({ email: req.body.email});
  //HASH PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

     if (emailExist) {
         return res.status(400).send('Email already exists!')
     } else {
         
       //CREATE NEW USERS
        try {  
       const registeredUser= new User({
           name: req.body.name,
           email: req.body.email,
           password: hashPassword,
           subscriptionPlan: req.body.subscriptionPlan,
           billingCycle: req.body.billingCycle,
           paymentStatus: req.body.paymentStatus
           
       });
    
       console.log(registeredUser);
       
      const savedUser = await registeredUser.save();
        
            res.json({
               
                status: 'Successfully Registered User!',
                data: savedUser
            });
        } catch (err) {
             res.json({ message: err })
        }
      }
    });
  
  


    

module.exports= router