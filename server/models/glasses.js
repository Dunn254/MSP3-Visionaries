'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Glasses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reviews }) {
      // define association here
        Glasses.hasMany(Reviews, {
            foreignKey: "glasses_id",
            as: "reviews"
            })
      
        }
    }
    Glasses.init({
        glasses_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        glasses_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inventory: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        features: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        specifications: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Glasses',
        tableName: 'Glasses',
        timestamps: false
    });
    return Glasses;
};