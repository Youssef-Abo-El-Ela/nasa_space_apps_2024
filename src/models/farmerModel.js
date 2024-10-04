const { DataTypes } = require('sequelize')
const { sequelize } = require('../config')

const farmer = sequelize.define('farmers',
    {
        farmer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'farmer_id'
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        farmer_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Egypt"
        }
    }, {
    timestamps: false,
}
)

module.exports = { farmer }

