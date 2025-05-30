//Database Connection
const {Sequelize} = require("sequelize")  //Sequelize  bata db connection table banauna milxa
require("dotenv").config()
console.log(process.env.password)
const sequelize = new Sequelize({
    database:process.env.database_name,
    username: process.env.db_username,
    password: process.env.db_password,
    port: process.env.db_port,
    host: process.env.db_host,
    dialect: "mysql"
})

sequelize.authenticate()
.then(()=>{
    console.log("Connected Successfully")
})
.catch((err)=>{
    console.log("Error Occured", err);
})

module.exports=sequelize;