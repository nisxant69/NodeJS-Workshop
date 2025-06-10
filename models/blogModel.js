// const { DataTypes, INTEGER } = require("sequelize");

// const sequelize = require("../database/db");   yo comment gareko parena
const { Sequelize, DataTypes } = require("sequelize");

const makeBlogTable = (sequelize, DataTypes ) => {
  
    // .define() = table banaidine vayo
    const Blog = sequelize.define("blog", {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        subtitle:{
            type: DataTypes.STRING
        }
    })
    return Blog
}
module.exports = makeBlogTable