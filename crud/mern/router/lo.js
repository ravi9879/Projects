const express = require('express') ;
const Log = require('../models/Login')
const router = express.Router() ; 
const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcrypt')   // same as for mysql 

 

router.post('/lo',async (req , res)=> {
    const {password , id} = req.body ; 
    const user = await Log.findOne({id}) ;    // finding data from mongo db
    if(!user){
        res.json("user does not exist");
    } 
    else {
        const valid_password = await bcrypt.compare(password , user.hash_password) ;
        if(!valid_password) {
            res.json("invalid credentials");
        } 
        const tok = jwt.sign({id : user._id} , "jwt-secret-key"  );
        // res.cookie("token" , tok );
        // console.log(tok) ;
        return res.json({tok , Status : "Success"} );
         // return res.json(tok) ;   
    }
    // res.json(user) ;    // printing the data 
 
});


module.exports = router  ; 