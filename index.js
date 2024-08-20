const express=require("express");

const app=express();
function ratelimitMiddleW(req,res,next){
    const kidneyId=req.query.kidneyId;
    const username=req.headers.username;
    const password=req.headers.password;
    if(username!="jatin" || password!="pass"){
        res.status(403).json({
            msg:"User Doesnt exist",
        });
        return;
    }
    if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg:"Wrong Inputs",
        });
        return;
    }
    next();

}
app.get("/health-checkup",ratelimitMiddleW,(req,res)=>{
    res.send("Your heart is healthy!!");
    
})
app.listen(3000);