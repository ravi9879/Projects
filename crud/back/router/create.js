const express = require('express') ;
const router = express.Router() ;   
const my = require('mysql');    
const co = my.createConnection({
    host:"localhost",
    user:"root",
    password:"ravi",
    database:"ravi", 
    connectionlimit: 10 
});

const {body , validationResult} = require('express-validator') ;



router.post('/create', [
    body('name' , 'valid name' ).isLength({min : 5 , max : 10} )
] , (req , res)=> {
    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        return res.json({errors : errors.array()  , msg : errors.array("msg")}) ;
    } 
    const sql = "insert into stud  values(? , ?  ,?) ";   
    co.query(sql,[req.body.id ,req.body.name ,req.body.sex ], (err ,data)=> { 
        if(err){
            return res.json(err) ;
        } 
        // const jwtData = jwt.sign(req.body.id , jwts ) ; 
        // return res.json(jwtData) ;
        return res.json(data) ;
    } ) 

});


module.exports = router  ; 