const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Topic }) {
      this.belongsTo(Topic, { foreignKey: 'topicId' });
    }
  }
  Question.init({
    questionName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Topics',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sequelize,
    modelName: 'Questions',
  });
  return Question;
};
