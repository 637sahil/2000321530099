
const bcrypt=require("bcrypt");
const User=require("../models/User")
const jwt=require("jsonwebtoken")
require("dotenv").config();
exports.signup=async(req,res)=>{
   try{
       const{name,email,password,role}=req.body;
       const existingUser=await User.findOne({email});
       if(existingUser){
           return res.status(400).json({
               success:false,
               message:"user already existed",

           });
       }

        let hashedPassword;
        try{
           hashedPassword=await bcrypt.hash(password,10);
        }
        catch(err){
           return res.status(500).json({
               success:false,
               message:"error in hashing password",

           });

        }

    
        const user=await User.create({
           name,email,password:hashedPassword,role
        })
        return res.status(200).json({
           success:true,
           message:"user created successfully",
        });

   }


  
   catch(error){
       console.log(error);
       return res.status(500).json({
           success:false,
           message:"user cant be registered,try later"
       });

   }
}



exports.login=async(req,res)=>{
   try{
       
       const{email,password}=req.body;
   
       if(!email|| !password){
           return res.status(400).json({
               success:false,
               message:"fill all details correctly",
           })
       }
       const user=await User.findOne({email});
       if(!user){
           return res.status(401).json({
               success:false,
               message:"user not registered"
           })
       }

       const payload={
           email:user.email,
           id:user._id,
           role:user.role,
       }
       if(await bcrypt.compare(password,user.password)){
           let token=jwt.sign(payload,process.env.jwt_secret,{
               expiresIn:"2h"
           })
           console.log(user);
           user.token=token;
           console.log(user);
           user.password=undefined;
             console.log(user);

           const options={
               expires:new Date(Date.now()+3*24*60*60*1000),
               httpOnly:true
           }
           res.cookie("meri cookie",token,options).status(200).json({
               success:true,
               token,
               user,
               message:"user logged successfully"
           })


       }
       else{
           return res.status(403).json({
               success:false,
               message:"password in correct"
           })
       }


   }
   catch(error){
       console.log(error);
       return res.status(500).json({
           success:true,
           message:"login failure"
       })

   }
}