const jwt = require('jsonwebtoken') ;


const user = (req , res ,  xt)=>{
    const tok = req.header('aut-tok') ;
    if(!tok){
        res.status.send("error") ;
    }
    try {
        const str = jwt.verify(tok ,"jwt-secret-key") 
        console.log(str) ;
        req.data = str ; 
        xt() ;    
    } catch (error) {
        res.status.send("err") ;
    } 
} 

module.exports = user ; 