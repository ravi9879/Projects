const express = require('express') ;
const router = express.Router() ;   
const bcrypt = require('bcrypt') ; 
const my = require('mysql');   
const co = my.createConnection({
    host:"localhost",
    user:"root",
    password:"ravi",
    database:"ravi", 
    connectionlimit: 10 
});

router.post('/update',(req , res)=> {
    if(req.body.value == 'name'){
        const sql = "update stud set name = (?) where id = (?)";
        // console.log(req.body.value)   ;
        co.query(sql,[req.body.update , req.body.id ], (err ,data)=> { 
            if(err){
                return res.json(err) ;
            } 
            return res.json("doe") ;
        } )  
    }
    else{
        const sql = "update stud set sex = (?) where id = (?)";
        // console.log(req.body.value)   ;
        co.query(sql,[req.body.update , req.body.id ], (err ,data)=> { 
            if(err){
                return res.json(err) ;
            } 
            return res.json("doe") ;
        } ) 
    }
});


module.exports = router  ; 