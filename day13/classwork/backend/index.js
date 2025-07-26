const express = require("express")
const app = express();
const connection = require('./configs/db');
const { userRoute } = require("./routes/user.route");
app.use(express.json());



// server.listen(PORT,()=>{
//     try{
//         connection

// });
 app.get("/",(req,res)=>{
  res.status(200).send(`<h1 style="color:red;background-color:yellow;width:80%;margin:auto" >welcome to the rb server</h1>`)
 })
 app.use(userRoute);
const PORT = 8080;
app.listen(PORT ,async()=>{
    try{
        console.log("DB is  connecting");
        await connection;
        console.log("DB is  connected");
            }catch {}

    
    console.log(`server is running on http://localhost:${PORT }`)
        }  
);





