const { SliderModel1 } = require("../Model/HomeSlider1.model");

const getHomeslider1Data=async(req,res)=>{
    const sliderData=await SliderModel1.find();
    res.send(sliderData)
}

const postHomeslider1Data=async(req,res)=>{
    const {id,image}=req.body
    const data=new SliderModel1(req.body);
    if(id && image){
        data.save()
        res.send("Posted Successfully")
    }else{
        console.log(req.body)
        res.send("Please send all the Fields")
    }
}

const Homeslider1Controller={
    getHomeslider1Data,
    postHomeslider1Data
}

module.exports={Homeslider1Controller}