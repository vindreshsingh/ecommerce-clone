const express=require("express");
const env=require("dotenv");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const app=express();

//rutes
const userRoutes=require("./routes/user");
env.config();

mongoose.connect('mongodb://localhost/ecommerse_clone', { useNewUrlParser: true, 
useUnifiedTopology: true }).then(() => 
console.log("Connected to MongoDB successfully!"))
    .catch(err => console.log(err));

    // body parser
app.use(bodyParser.urlencoded());
app.use("/api",userRoutes)
app.listen(process.env.PORT,()=>{
    console.log(`server run on this port number ${process.env.PORT}`);
});