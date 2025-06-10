// const { DataTypes, INTEGER } = require("sequelize");

// const sequelize = require("../database/db");   yo comment gareko parena
const { Sequelize, DataTypes } = require("sequelize");

const makeTodoTable = (sequelize, DataTypes ) => {
  
    // .define() = table banaidine vayo
    const Todo = sequelize.define("todo", {
        task: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        date:{
            type: DataTypes.STRING
        },
        status:{
            type: DataTypes.ENUM("completed","pending"),
            defaultValue:"pending"
        }
    })
    return Todo
}
module.exports = makeTodoTable