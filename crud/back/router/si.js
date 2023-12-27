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



const salt = 5 ;

router.post('/si',(req , res)=> {
    const sql = "insert into si  values(? , ?  ,? , ?) ";   
    bcrypt.hash(req.body.password.toString() , salt , (error , hash)=> {
        if(error ){
            res.json("error");
        } 
        co.query(sql,[req.body.id , req.body.name ,hash ,req.body.password ], (err ,data)=> { 
            if(err){
                return res.json(err) ;
            } 
            const name = req.body.name ; 
            // const tok = jwt.sign((name) , "jwt-secret-key"  );
            // console.log(tok) ;
            return res.json({Status : "Success"} ); 
        } ) 
    } )
});


module.exports = router  ; 