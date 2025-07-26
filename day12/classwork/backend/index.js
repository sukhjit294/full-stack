// const express = require("express");

// const app =express();

// app.get("/",(req,res)=>{

//     res.status(200).send(`<h2 style="color:blue; background-color:yellow;margin:auto"> welcome to RB server</h2>`);

// });
//  const PORT =8080;

//  app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
//  });
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));