const express = require("express")
const app = express()
const db =require("./database/db")
const bcrypt = require("bcrypt")

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

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

//Form bata value input leko
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body
    console.log(req.body)

    await db.userModel.create({
        username: username,
        email: email,
        password: bcrypt.hashSync(password,10)
    })
    res.send("Registered Successfully")
})

app.listen(3000,function(){
    console.log("Port 3000 is Running.")
})

