const express=require("express");
const router=express.Router();
const {login,signup}=require("../Controllers/Auth");
const {auth,isStudent,isAdmin}=require("../middlewares/auth")
router.post("/login",login);
router.post("/signup",signup);

//middleware for test
router.get("/test",auth,(req,res)=>{  
    res.json({
        success:true,
        message:"welcome to protected route for test"
    })
})

//middleware for student
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to protected route for student"
    })
})
// middleware for admin
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to protected route for admin"

    })
})
module.exports=router;

