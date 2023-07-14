'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const questionArr = [
      {
        questionName:
          'https://imgur.com/0z4xWnl',
        answer: 'Аня',
        count: 200,
        topicId: 1,
      },
      {
        questionName:
          'https://imgur.com/E1uXyfM',
        answer: 'Артем',
        count: 400,
        topicId: 1,
      },
      {
        questionName:
          'https://imgur.com/6QeMw6g',
        answer: 'Толя',
        count: 600,
        topicId: 1,
      },
      {
        questionName:
          'https://imgur.com/3O9gwhO',
        answer: 'Лиза',
        count: 800,
        topicId: 1,
      },
      {
        questionName:
          'https://imgur.com/x1Y2wDF',
        count: 1000,
        answer: 'Юра',

        topicId: 1,
      },
      {
        questionName:
          'https://imgur.com/GDupvub',
        answer: 'Антон',
        count: 200,
        topicId: 2,
      },
      {
        questionName:
          'https://imgur.com/gCXIDsw',
        answer: 'Лена',
        count: 400,
        topicId: 2,
      },
      {
        questionName:
          'https://imgur.com/TSr1Rpn',
        answer: 'Гагик',
        count: 600,
        topicId: 2,
      },
      {
        questionName:
          'https://imgur.com/6u9SsVt',
        answer: 'Вася',
        count: 800,
        topicId: 2,
      },
      {
        questionName:
          'https://imgur.com/NqIV4bT',
        answer: 'Снежана',
        count: 1000,
        topicId: 2,
      },
    ];
    const questions = questionArr.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', questions);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions');
  }
};
