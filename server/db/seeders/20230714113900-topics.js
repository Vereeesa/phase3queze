'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const topicArr = [
      {
        topicName: 'Главные',
      },
      {
        topicName: 'Студенты',
      },
    ];
    const topics = topicArr.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Topics', topics);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics');
  }
};
