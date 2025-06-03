const express = require("express")
const app = express()
require("./database/db")

app.set("view engine","ejs")
app.get("/",function(req,res){
    res.render("todo/get_todo")
})
app.get("/get",function(req,res){
    res.render("todo/get_todo")
})
app.get("/add",function(req,res){
    res.render("todo/add_todo")
})
app.get("/update",function(req,res){
    res.render("todo/update_todo")
})
app.get("/login",function(req,res){
    res.render("authentication/login")
})
app.get("/register",function(req,res){
    res.render("authentication/register")
})
app.listen(3000,function(){
    console.log("Port 3000 is Running.")
})
