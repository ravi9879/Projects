const express = require('express') ;
const User = require('../models/Studs')
const router = express.Router() ; 
const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5 ;

const {body , validationResult} = require('express-validator') ;


router.post('/delete', async (req , res)=> {
    // const sql = "delete from stud where id = (?) ";   
    // co.query(sql,[req.body.id ,req.body.name ,req.body.sex ], (err ,data)=> { 
    //     if(err){
    //         return res.json(err) ;
    //     } 
    //     return res.json("doe") ;
    // } ) 

 
    const {id} = req.body ;
    const f = await User.deleteOne({id}) ;    // finding data from mongo db
    res.json("Success") ;


});


module.exports = router  ; 