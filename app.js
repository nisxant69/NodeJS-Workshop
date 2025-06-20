const express = require("express")
const app = express()
const db =require("./database/db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { isLoggedin } = require("./middleware/isLoggedin")
const cookieParser = require("cookie-parser")   
app.use(cookieParser())


app.get("/", isLoggedin,async (req,res)=>{
    const datas = await db.todoModel.findAll()
    res.render("todo/get_todo",{datas:datas})
})
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

app.get("/add", isLoggedin, function(req,res){
    res.render("todo/add_todo")
})
app.get("/update",isLoggedin,function(req,res){
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

app.post("/login",async (req,res)=>{
    const {email,password}=req.body
    const users = await db.userModel.findAll({
        where : {
            email : email
        }
    })
    if(users.length == 0){
        res.send("Email not registered")
    } else {
        //Check Password, first  plain password , second hashed password table ma store vako
        const isPasswordMatch =  bcrypt.compareSync(password,users[0].password)
        if(isPasswordMatch){
            const token=jwt.sign({id:users[0].id},"secretkey",{   //payload secondma private key
                expiresIn:"1d" //Kati time ma expire hunxa
            })
            res.cookie("token",token)
            // res.send(token)
            // res.send("Logged in Successfully")
        } else{
            res.send("Invalid Email or Password")
        }
    }
    res.redirect("/")
})


//Todo Store garne
app.post('/addtodo', async (req, res) => {
    const { task, description, date } = req.body
    console.log(req.body)
    await db.todoModel.create({
        task: task,
        description : description,
        date : date
    })
    res.send("Todo List Updated  Successfully")
})


app.listen(3000,function(){
    console.log("Port 3000 is Running.")
})

