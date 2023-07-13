/** @type {import('sequelize-cli').Migration} */
const data = require('../studentsArr');

module.exports = {
  async up(queryInterface) {
    const arrFlowers = data.map((el) => (
      {
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Students', arrFlowers, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
