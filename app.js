const express = require("express")
const app = express()

app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("home.ejs")
})

app.get("/about",function(req,res){
    res.render("about.ejs")
})

app.listen(3000,function(){
    console.log("Port 3000 is occupied by backend.")
})
