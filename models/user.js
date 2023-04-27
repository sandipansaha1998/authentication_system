const mongoose = require('mongoose');


//Schema Definition

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetPasswordLinkTime:{
        type:Date
    }
},{
    timestamps:true
});




//Model Definition
const users= mongoose.model('User',userSchema);
module.exports = users;