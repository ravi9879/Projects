const express = require('express') ;
const router = express.Router() ; 

router.post('/user',(req , res)=> {
    const mid = req.data ; 
    if(res) { 
        console.log(mid)  ;
        return res.json({Status : "Success"} ); 
    }
    else {
        return res.json('usuccess');
    }  
});


module.exports = router  ; 