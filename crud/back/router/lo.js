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
// const salt = 1  ;
// const jwts = "Ravioy"  ;



router.post('/lo',(req , res)=> {
    const sql = "select * from si where id = (?)  ";   
    co.query(sql,[req.body.id ], (err ,data)=> { 
        if(err){
            return res.json('err') ;
        } 
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString() , data[0].hash , (error , resp) =>{
                if(error){
                    res.json("error")
                }   
                if(resp){
                    // const name = data[0].name ; 
                    // const tok = jwt.sign((name) , "jwt-secret-key"  );
                    // res.cookie("token" , tok );
                    // console.log(tok) ;
                    return res.json({Status : "Success"} );
                    // return res.json(tok) ;
                }
                else {
                    return res.json('usuccess');
                } 
            })
        }
        // res.json(data);
        else{
            return res.json("doe") ;
        }
        
    } ) 
});


module.exports = router  ; 