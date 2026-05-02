console.log("Hello,World!");

require("dotenv").config();

const express=require("express");
 const app=express();
 const port=process.env.PORT;
 app.get("/",(req,res)=>{
    res.send("Hello,World!");
 })

 app.get("/login",(req,res)=>{
    res.send("<h1>Vaibhav you can do it!</h1>")
 })  

 app.listen(port,()=>{
    console.log('Server is running on localhost:${port}')
 })