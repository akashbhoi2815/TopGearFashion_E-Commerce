const express=require("express");
const cors=require("cors");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const connection = require("./config/db");
const { UsersModel } = require("./Model/Users.model");
const { menRouter } = require("./routes/Men.route");
const { womenRouter } = require("./routes/Women.route");
const { Homeslider1Router } = require("./routes/HomeSlider1.route");
const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})
app.post("/signup",async(req,res)=>{
    const {name,email,password,gender,mobile}=req.body;
    const isUser=await UsersModel.findOne({email})
    if(isUser){
        res.send("User already Exist Try login ")
    }
    bcrypt.hash(password,4,async function(err,hash){
        if(err){
            res.send("something Went wrong")
        }
        const newUser=new UsersModel({
            name,
            email,
            password:hash,
            gender,
            mobile
        })
        try{
            await newUser.save();
            res.send("Signup Successfull")
        }
        catch{
            res.send("Please enter Correctly")
        }
    })
})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const user=await UsersModel.findOne({email});
    const hashed_password=user.password
    const user_id=user._id;
    console.log(user)
    // console.log(user_id);
    bcrypt.compare(password,hashed_password,function(err,result){
        if(err){
            res.send({"msg":"Something went wrong"})
        }
        if(result){
            const token=jwt.sign({user_id},process.env.SECRET_KEY);
            res.send({message:"Login Successfull",token})
        }else{
            res.send({"msg":"Login Failed"})
        }
    })
})

app.get("/users",async(req,res)=>{
    const usersData=await UsersModel.find();
    res.send(usersData)
})

app.use("/tgf",menRouter);
app.use("/tgf",womenRouter)
app.use("/tgf",Homeslider1Router)
app.listen(8000,async()=>{
    try{
        await connection,
        console.log("Connection to Mongodb Successfull");
    }
    catch(err){
        console.log("Error connection to db")
    }
    console.log("Listening to server 8000")
})