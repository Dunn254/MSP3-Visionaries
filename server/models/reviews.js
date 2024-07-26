'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Glasses }) {
      // define association here
        Reviews.belongsTo(Glasses, {
            foreignKey: "glasses_id",
            as: "glasses"
            })
      
        }
    }
    Reviews.init({
        review_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        glasses_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reviewer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        stars: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Reviews',
        tableName: 'Reviews',
        timestamps: false
    });
    return Reviews;
};