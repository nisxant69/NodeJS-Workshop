//Database Connection
const {Sequelize,DataTypes} = require("sequelize")  //Sequelize  bata db connection table banauna milxa
require("dotenv").config()
require("./../models/blogModel")
require("./../models/userModel")
require("./../models/todoModel")
console.log(process.env.password)
const sequelize = new Sequelize({
    database:process.env.database_name,
    username: process.env.db_username,
    password: process.env.db_password,
    port: process.env.db_port,
    host: process.env.db_host,
    dialect: "mysql"
})

// sequelize connect huna try gar vanne query:
sequelize.authenticate().then(()=>{
    console.log("Database connected Succesfully.")
})
.catch((err)=>{
console.log(" Error occured: ", err);
})

const db = {}
// db.name = "node"

db.blogModel = require("./../models/blogModel")(sequelize, DataTypes)
db.userModel = require("./../models/userModel")(sequelize, DataTypes)
db.todoModel = require("./../models/todoModel")(sequelize, DataTypes)


sequelize.sync({alter: true}).then(() =>{//true xa vane database changes aauxa na vaye kei update hudaina database. kei update garna xa vane matra true rakhne natra false rakhne 
    console.log("Migrated Successfully")
})//Migration successfully

module.exports = sequelize;
module.exports = db;