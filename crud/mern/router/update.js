const express = require('express') ;
const User = require('../models/Studs')
const router = express.Router() ; 
const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5 ;

const {body , validationResult} = require('express-validator') ;

router.post('/update', async (req , res)=> {

    const {id , value , update } = req.body ;
    
    const { name , gender} = await User.findOne({id}) ; 
    // res.json(name) ;
    
    if(value === "name" ){
        const new_user = new User({ id , name : update , gender }) ; 
        const f = await User.deleteOne({id}) ;    // finding data from mongo db
        await new_user.save();   // save data to mongo db
        return res.json({Status : "Success"} );  
    }

    if(value === "gender" ) {
        const new_user = new User({ id , name , gender : update }) ; 
        const f = await User.deleteOne({id}) ;    // finding data from mongo db
        await new_user.save();   // save data to mongo db
        return res.json({Status : "Success"} );  
    }


    
    // const lo = User(req.body) ; 
    // await lo.save();   // save data to mongo db
    // res.json("success");

    // if(req.body.value == 'name'){
    //     const sql = "update stud set name = (?) where id = (?)";
    //     // console.log(req.body.value)   ;
    //     co.query(sql,[req.body.update , req.body.id ], (err ,data)=> { 
    //         if(err){
    //             return res.json(err) ;
    //         } 
    //         return res.json("doe") ;
    //     } )  
    // }
    // else{
    //     const sql = "update stud set sex = (?) where id = (?)";
    //     // console.log(req.body.value)   ;
    //     co.query(sql,[req.body.update , req.body.id ], (err ,data)=> { 
    //         if(err){
    //             return res.json(err) ;
    //         } 
    //         return res.json("doe") ;
    //     } ) 
    // }
});


module.exports = router  ; 