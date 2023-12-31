const router = require('express').Router();
const { Topic } = require('../../db/models');
const { Question } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.findAll({ include: { model: Question } });
    res.json(topics);
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});

/*

router.get('/:topicName', async (req, res) => {
  const { topicName } = req.params;

  try {
    const { id } = await Topic.findOne({ where: { topicName } });
    const questions = await Question.findAll({ where: { topicId: id } });
    res.json(questions);
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
}); */

module.exports = router;
