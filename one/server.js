var express = require("express");
var app = express();

app.get("/",(req,res)=>{
    console.log("Welcome Shrey");
});

app.listen(4000,()=>{
    console.log("Started server...");
});