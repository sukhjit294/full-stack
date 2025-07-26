// const { userModel } = require("../models/user.model");

// const UserSignup = async(req,res)=>{
// const  {name , email, password, phonenumber, 
//     age} =req.body
//     // console.log(req.body)

// try{
// const user = new userModel (name , email, password, phonenumber, age);
//     await user.save();

// }catch(error){

// res.status(400).send('error:error:mesage')
// }
// }

// const Userlogin = ()=>{


// }

// module.exports={UserSignup}


const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt")

const UserSignup = async (req, res) => {
  const { name, email, password, phonenumber, age } = req.body;
const userExist =await userModel.findOne({email});
if(userExist){
  return res.send("userExist");
}
  try {
    // Store hash in your password DB.
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.status(400).send("Error while hashing");

      } else {

        const user = new userModel({ name, email, password:hash, phonenumber, age });
        await user.save();
        res.status(200).send({ message: "User registered successfully", user });
        

      }


    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const Userlogin = (req, res) => {
  // implement login logic here
};

module.exports = { UserSignup, Userlogin };




