const express = require("express")
const app = express()
const db =require("./database/db")

app.use(express.urlencoded({extended:true}))

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

app.post('/register', async (req, res) => {  // Add 'async' here
    const { username, email, password } = req.body
    console.log(req.body)
    
    try {
        await db.users.create({
            username: username,
            email,
            password
        })
        
        // Send success response
        res.status(201).json({ message: 'User registered successfully' })
        
    } catch (error) {
        // Handle errors (duplicate email, validation errors, etc.)
        res.status(400).json({ error: error.message })
    }
})

app.listen(3000,function(){
    console.log("Port 3000 is Running.")
})
