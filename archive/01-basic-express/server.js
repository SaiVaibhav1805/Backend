// const express=require("express");
import express from "express";
import cors from "cors";
const app=express();
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello,World!");
});

app.get("/jokes",(req,res)=>{
    const joke=[
        { id: 1, text: "Why don't scientists trust atoms? Because they make up everything!" },
        { id: 2, text: "Why did the bicycle fall over? Because it was two-tired!" },
        { id: 3, text: "Why don't skeletons fight each other? They don't have the guts!" }
    ];
    res.send(joke);
});


const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on localhost:${port}`);
});