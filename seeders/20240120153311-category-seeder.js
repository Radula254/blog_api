'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Fun'
      },
      {
        name: 'Food'
      },
      {
        name: 'Creative'
      },
      {
        name: 'Happy'
      },
      {
        name: 'Cars'
      },
      {
        name: 'Games'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categorories',{}, null);
  }
};
