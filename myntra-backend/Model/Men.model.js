const mongoose=require("mongoose");

const MenSchema=mongoose.Schema({
    Idno:{type:String},
    categories:{type:String},
    size:{type:String},
    title:{type:String},
    price:{type:String},
    gender:{type:String},
    sizes:[{type:String}],
    description:{type:String},
    brand:{type:String},
    color:{type:String},
    discount:{type:Number},
    off_price:{type:Number},
    images:{type:Map,of:String}
})

const MensModel=mongoose.model("men",MenSchema);

module.exports={MensModel}