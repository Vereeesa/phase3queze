const router = require('express').Router();

const { Student } = require('../../db/models');

router.post('/', async (req, res) => {
  const { name, url } = req.body;

  try {
    if (name && url) {
      const student = await Student.create({ name, url });
      res.status(201).json(student);
    } else {
      res.status(401).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});

router.delete('/:idStudent', async (req, res) => {
  try {
    const flowerDel = await Student.destroy({
      where: { id: req.params.idStudent },
    });
    if (flowerDel) {
      res.status(200).json({ message: 'Ok' });
    } else {
      res.status(400).json({ message: 'Сервер временно не работает', status: 400 });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll({ order: [['id', 'ASC']] });
    res.json(students);
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.put('/:idStudent', async (req, res) => {
  const { status } = req.body;
  try {
    const student = await Student.findOne({ where: { id: req.params.idStudent } });
    student.status = status;
    await student.save();
    res.json(student);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
