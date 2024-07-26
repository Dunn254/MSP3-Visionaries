'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews',[
      {
        glasses_id: 1,
        reviewer: 'Bill',
        review: 'Greatest sunglasses ever',
        stars: 5
      },
      {
        glasses_id: 2,
        reviewer: 'Ted',
        review: 'Excellent sound and video',
        stars: 5
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {})
  }
};
