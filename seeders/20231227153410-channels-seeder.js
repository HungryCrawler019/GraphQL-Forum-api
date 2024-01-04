'use strict';
const uuid = require('uuid');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Channels', [
      {
        name: 'General',
        slug: 'general',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        name: 'AdnisJs',
        slug: 'adonisJS',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        name: 'VueJs',
        slug: 'vueJS',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Channels', null, {});

  }
};
