const router = require('express').Router();

const { User } = require('../../db/models/user');

router.post('/', async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (email && password && name) {
      const user = await User.create({ email, password, name });
      res.status(201).json(user);
    } else {
      res.status(401).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});
/* router.delete("/:idUser", async (req, res) => {
  try {
    const userDel = await User.destroy({
      where: { id: req.params.idUser },
    });
    if (userDel) {
      res.status(200).json({ message: "Ok" });
    } else {
      res
        .status(400)
        .json({ message: "Сервер временно не работает", status: 400 });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
}); */

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ order: [['id', 'ASC']] });
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.put('/:idUser', async (req, res) => {
  const { scoreUser } = req.body;
  try {
    const user = await User.findOne({ where: { id: req.params.idUser } });
    user.scoreUser = scoreUser;
    await user.save();
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
