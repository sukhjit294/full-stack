const mongoose = require ("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phonenumber:{
        type:String
    },
    age:{
        type:Number
    }

    
});


const userModel = mongoose.model("user",
    userSchema);

    module.exports={
        userModel
    }