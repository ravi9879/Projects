const mongoose = require("mongoose") ;
const mURL = "mongodb://localhost:27017" ;
const mconnect = () => {
    if(mongoose.connect(mURL)) {
        console.log("connected");
    }
    else {
        console.log("not connected");
    }
}

module.exports =  mconnect ;