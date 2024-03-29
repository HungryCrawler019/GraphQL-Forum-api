'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Threads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contentt: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      channelId : {
        type: Sequelize.UUID,
        allowNull: false
      },
      status  : {
        type : Sequelize.ENUM('UNSOLVED', 'SOLVED'),
        allowNull: false,
        defaultValue: 'UNSOLVED'
      },
      isLocked : {
        type : Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      lastRepliedAt : {
        type : Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Threads');
  }
};