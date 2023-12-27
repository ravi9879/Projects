const express = require('express') ;
const User = require('../models/Studs')
const router = express.Router() ; 
const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5 ;

const {body , validationResult} = require('express-validator') ;

router.get('/studs', async (req , res)=> {

 
    // console.log(req.body) ;
    // const {id} = req.body ;
    const f = await User.find({}) ;    // finding all  data from mongo db like (select * in mysql)
    res.json(f) ;
    // if(f) {
    //     console.log("found")
    // } 
    // else {
    //     console.log("no") ;
    // }
    // const lo = Log(req.body) ; 
    // lo.save();   // save data to mongo db
    // res.send(req.body);

    // const sql = 'select * from stud ;' ; 
    // co.query(sql, (err , data )=> { 
    //     if(err){  
    //         return res.json("Error") ;
    //     }
    //     return res.json(data) ;
    // } ) 

});


module.exports = router  ; 