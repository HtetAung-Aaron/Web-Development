const express = require("express");
const { homedir } = require("os");
const { dirname } = require("path");
const app = express();

app.listen(8000, () => {
    console.log("Application started and Listening on port 8000");
  });

app.use(express.static(__dirname));

app.get("/about",(req,res)=>{
  res.write("<h1>Hello Aaron </h1>");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/home.html");
});

app.get("/catagories",(req,res)=>{
  res.write("<h1>from 1999 to 2022: </h1>");
});

app.get("/search",(req,res)=>{
  res.write("<h1>Search the keyword: </h1>");
});

app.get("/trending",(req,res)=>{
  res.write("<h1>Nothing special: </h1>");
});

app.get("/history",(req,res)=>{
  res.write("<h1>Your blance is low: </h1>");
});
