const express = require('express') ; 
const cp = require('cookie-parser') ; 
const cors = require('cors') ; 
const dy = require('body-parser');
const app =  express() ; 


// {
//     origin : ["http://localhost:800/lo/"],
//     methods : ["POST" ,"GET"] ,
//     credentials :true 
// }
 

app.use(cp()) ;
app.use(cors()) ;
app.use(dy.json());
app.use(dy.urlencoded({ extended: true }));
app.use('/' , require('./router/mid')) ;
app.use('/' , require('./router/user')) ; 
app.use('/' , require('./router/create')) ;
app.use('/' , require('./router/delete')) ;
app.use('/' , require('./router/lo')) ;
app.use('/' , require('./router/si')) ;
app.use('/' , require('./router/studs')) ;
app.use('/' , require('./router/update')) ; 

 
app.listen(800 , ( )=> { 
    console.log('app started successsfuly');
}) 