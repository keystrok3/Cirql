const { Model, DataTypes } = require("sequelize");
const { db_connection } = require("../dbconfig/db");


class Photo extends Model {
    static associate(models) {
        Photo.belongsTo(models.User, {
            foreignKey: 'username'
        })
    }
}


Photo.init({
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    filepath: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mimetype: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // size of file in bytes
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        references: {
            model: 'User',
            key: 'username'
        }
    }
}, {
    sequelize: db_connection,
    tableName: 'photos',
    updatedAt: false
})


module.exports = Photo