'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questionArr = [
      {
        questionName: '1',
        answer: '1',
        count: 200,
        topicId: 1,
      },
      {
        questionName: '2',
        answer: '2',
        count: 400,
        topicId: 1,
      },
      {
        questionName: '3',
        answer: '3',
        count: 600,
        topicId: 1,
      },
      {
        questionName: '4',
        answer: '4',
        count: 800,
        topicId: 1,
      },
      {
        questionName: '5',
        answer: '5',
        count: 1000,
        topicId: 1,
      },
      {
        questionName: '1',
        answer: '1',
        count: 200,
        topicId: 2,
      },
      {
        questionName: '2',
        answer: '2',
        count: 400,
        topicId: 2,
      },
      {
        questionName: '3',
        answer: '3',
        count: 600,
        topicId: 2,
      },
      {
        questionName: '4',
        answer: '4',
        count: 800,
        topicId: 2,
      },
      {
        questionName: '5',
        answer: '5',
        count: 1000,
        topicId: 1,
      },
    ];
    const questions = questionArr.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', questions);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions');
  },
};
