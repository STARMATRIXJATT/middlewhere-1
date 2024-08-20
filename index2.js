const express= require("express");

const app=express();

let NumberOfReq=0;

function calculateRequests(req,res,next){
    NumberOfReq++;
    console.log(NumberOfReq);
    next();
}

app.get("/health-checkup",calculateRequests,function(req,res){

})

app.get("/health-checkup",calculateRequests,function(req,res){

})

app.listen(3000);