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

router.post('/delete',(req , res)=> {
    const sql = "delete from stud where id = (?) ";   
    co.query(sql,[req.body.id ,req.body.name ,req.body.sex ], (err ,data)=> { 
        if(err){
            return res.json(err) ;
        } 
        return res.json("doe") ;
    } ) 

});


module.exports = router  ; 