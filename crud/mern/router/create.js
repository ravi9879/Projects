const express = require('express') ;
const User = require('../models/Studs')
const router = express.Router() ; 
const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5 ;

const {body , validationResult} = require('express-validator') ;

router.post('/create', async (req , res)=> {
    const lo = User(req.body) ; 
    await lo.save();   // save data to mongo db
    res.json("success");

}) ;


// router.post('/create', [
//     body('name' , 'valid name' ).isLength({min : 5 , max : 10} )
// ] , (req , res)=> {
//     const errors = validationResult(req) ;
//     if(!errors.isEmpty()){
//         return res.json({errors : errors.array()  , msg : errors.array("msg")}) ;
//     }
    
//     // console.log(req.body) ;
//     const {name , id , gender} = req.body ;
//     // const f = User.findOne({id}) ;    // finding data from mongo db 
//     const lo = User(req.body) ; 
//     lo.save();   // save data to mongo db
//     res.send(req.body);

//     // const sql = "insert into stud  values(? , ?  ,?) ";   
//     // co.query(sql,[req.body.id ,req.body.name ,req.body.sex ], (err ,data)=> { 
//     //     if(err){
//     //         return res.json(err) ;
//     //     } 
//     //     // const jwtData = jwt.sign(req.body.id , jwts ) ; 
//     //     // return res.json(jwtData) ;
//     //     return res.json(data) ;
//     // } )  

// });


module.exports = router  ; 