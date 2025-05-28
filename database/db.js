//Database Connection
const {Sequelize} = require("sequelize")

const sequelize = new Sequelize('localhost','ecommerce_db','password')  //Making object from Sequelize class


// const info={
//     name:"Nishant",
//     age:20
// }

// const name = info.name
// const age = info.age
// //Destructure
// const {name,age}=info