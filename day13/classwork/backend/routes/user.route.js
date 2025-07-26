const express = require("express");
const { UserSignup } = require("../controllers/user.controller");


const userRoute = express.Router();


userRoute.post('/signup',UserSignup);


module.exports={
    
    userRoute
}