// Creates table 'following' of users following other users.
const { DataTypes, Model } = require('sequelize')
const { db_connection } = require('../dbconfig/db')
const User = require('./user')


class Following extends Model {
    static associate(models) {
        Following.belongsTo(models.User, {
            foreignKey: "user_follows"
        })

        Following.belongsTo(models.User, {
            foreignKey: "user_followed"
        })
    }
}


Following.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_follows: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'username'
        }
    },
    user_followed: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'username'
        }
    }
}, {
    sequelize: db_connection,
    tableName: 'follows',
    indexes: [
        {
            unique: true,
            fields: [ "user_follows", "user_followed" ]
        }
    ]
})

module.exports = Following
