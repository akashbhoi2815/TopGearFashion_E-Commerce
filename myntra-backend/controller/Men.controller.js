const { MensModel } = require("../Model/Men.model");

const getMenData=async(req,res)=>{
    const menData=await MensModel.find();
    res.send(menData)
}

const postMensData=async(req,res)=>{
    const {Idno,categories,title,price,gender,sizes,description,brand,color,discount,off_price,images,rating}=req.body
    const data=new MensModel(req.body);
    if(Idno && categories && title && price && gender && sizes && description && brand && color && discount && off_price && images && rating){
        data.save()
        res.send("Posted Successfully")
    }else{
        console.log(req.body)
        res.send("Please send all the Fields")
    }
}

const MensDataController={
    getMenData,
    postMensData
}

module.exports={MensDataController}