const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://singhsukhjit530:SukhjitSingh@cluster0.o4qspgv.mongodb.net/MyFirstDb?retryWrites=true&w=majority&appName=Cluster0")

module.exports ={
   connection
}

