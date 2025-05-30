const express = require("express")
const app = express()
require("./database/db")

app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("home",{page:"Home"})
})

app.get("/about",function(req,res){
    res.render("about")
})

app.get("/profile",function(req,res){
    res.render("profile",{age:25,name:"Nishant"})
})

app.get("/contact",function(req,res){
    res.render("contact")
})

app.listen(3000,function(){
    console.log("Port 3000 is Running.")
})
