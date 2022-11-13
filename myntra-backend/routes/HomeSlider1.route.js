const express=require("express");
const { Homeslider1Controller } = require("../controller/HomeSlider1.controller");
const Homeslider1Router=express.Router();

Homeslider1Router.use(express.json())

Homeslider1Router.get("/homeslider1data",Homeslider1Controller.getHomeslider1Data)
Homeslider1Router.post("/homesliderimages",Homeslider1Controller.postHomeslider1Data)

module.exports={Homeslider1Router}