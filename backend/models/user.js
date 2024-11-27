
/**
 * User Model: creates table for user information
*/

const { Model, DataTypes } = require("sequelize");
const { db_connection } = require("../dbconfig/db");


class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    profile_photo: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: db_connection,
    tableName: 'usertable',
    updatedAt: false
})

module.exports = User