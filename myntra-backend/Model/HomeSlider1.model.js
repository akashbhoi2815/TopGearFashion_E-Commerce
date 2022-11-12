const mongoose=require("mongoose");

const Slider1Schema=mongoose.Schema({
    id:{type:Number},
    image:{type:String}
})

const SliderModel1=mongoose.model("homeslider1",Slider1Schema)
module.exports={SliderModel1}