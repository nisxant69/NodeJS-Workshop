const { Sequelize, DataTypes } = require("sequelize");

const makeUserTable = (sequelize, DataTypes ) => {
  
    // .define() = table banaidine vayo
    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        }
    })
    return User
}
module.exports = makeUserTable