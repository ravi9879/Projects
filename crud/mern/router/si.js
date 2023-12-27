const express = require('express') ;
const Log = require('../models/Login')
const router = express.Router() ; 
const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5 ;

router.post('/si', async(req , res)=> { 
    const {name , id , password} = req.body ;
    const user = await Log.findOne({id}) ;
    if(user){
        res.json("user already exist") ;
    } 
    else {
        const hashPassword = await bcrypt.hash(password , salt ) ;
        const new_user = new Log({name , id , hash_password : hashPassword , password : password}) ; 
        await new_user.save();   // save data to mongo db
        return res.json({Status : "Success"} );  
    } 
});


module.exports = router  ; 