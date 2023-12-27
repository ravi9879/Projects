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

router.get('/studs',(req , res)=> {
    const sql = 'select * from stud ;' ; 
    co.query(sql, (err , data )=> { 
        if(err){ 
            return res.json("Error") ;
        }
        return res.json(data) ;
    } ) 

});


module.exports = router  ; 