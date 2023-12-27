const mongoose = require("mongoose") ;
const {Schema} = mongoose ;

const StSchema = new Schema({
    // id : {
    //     type : String , 
    //     required : true 
    // } ,
    sno : {
        type : Number,
        required : true ,
        unique : true 
    },
    name : {
        type : String,
        required : true
    },
    gender : { 
        type : String,
        required : true
    }

})


module.exports = mongoose.model('stud' , StSchema)  ;