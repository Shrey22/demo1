var express = require("express");
var app = express();

app.get("/",(req,res)=>{
    console.log("GET req added");
});

app.post("/",(req,res)=>{
    console.log("POST req added");
});
//sdfdfgh
app.listen(4000,()=>{
    console.log("Started server...");
});