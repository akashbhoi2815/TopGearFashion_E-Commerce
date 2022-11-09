const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true},
    password:{type:String,required:true},
    gender:{type:String},
    mobile:{type:Number}
})

const UsersModel=mongoose.model("auth",userSchema);

module.exports={UsersModel}