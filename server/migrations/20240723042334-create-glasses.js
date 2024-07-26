'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Glasses', {
      glasses_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      glasses_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      inventory: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      features: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      specifications: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      price: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Glasses');
  }
};