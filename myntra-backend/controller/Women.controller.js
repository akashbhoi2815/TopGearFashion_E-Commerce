const { WomenModel } = require("../Model/Women.model");

const getWomenData=async(req,res)=>{
    const menData=await WomenModel.find();
    res.send(menData)
}

const postWomensData=async(req,res)=>{
    const {Idno,categories,title,price,gender,sizes,description,brand,color,discount,off_price,images,rating}=req.body
    const data=new WomenModel(req.body);
    if(Idno && categories && title && price && gender && sizes && description && brand && color && discount && off_price && images && rating){
        data.save()
        res.send("Posted Successfully")
    }else{
        console.log(req.body)
        res.send("Please send all the Fields")
    }
}

const WomensDataController={
    getWomenData,
    postWomensData
}

module.exports={WomensDataController}