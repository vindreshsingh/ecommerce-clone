const express=require("express");
const router=express.Router();
//models
const User=require("../models/user")

router.post("/signin",(req,res)=>{
    res.send("hello sigin")
});
router.post("/signup",(req,res)=>{
 User.findOne({email:req.body.email})
 .exec((error,user)=>{
     if(user) return res.status(400).json({
         message:"user already registered"
     });
     const { firstName, lastName, email, password } = req.body;
 })
});
module.exports=router