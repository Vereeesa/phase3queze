const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

// РЕГИСТРАЦИЯ
router.post('/registration', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (email && password && name) {
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hash });
      req.session.userId = user.id;
      res.status(201).json(user);
    } else {
      res.status(401).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});

// ЛОГИН
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const compare = await bcrypt.compare(password, user.password);
    if (!email || !password) {
      res.json({ message: 'Заполните все поля' });
      return;
    }
    if (!user || !compare) {
      res.json({ message: 'Такого юзера не существует или пароль неверный' });
      return;
    }
    req.session.userId = user.id;
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});

// ЛОГАУТ
router.delete('/logout', async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    return res
      .clearCookie('user_sid')
      .status(200)
      .json({ message: 'logout success' });
  });
});

// ПРОВЕРКА СЕССИИ
router.get('/check', async (req, res) => {
  try {
    if (req.session.userId) {
      const user = await User.findOne({ where: { id: req.session.userId } });
      res.json(user);
      return;
    }
    res.json({ message: 'no' });
  } catch ({ message }) {
    res.json({ message });
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

// router.get('/', async (req, res) => {
//   try {
//     const users = await User.findAll({ order: [['id', 'ASC']] });
//     res.json(users);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });
// router.put('/:idUser', async (req, res) => {
//   const { scoreUser } = req.body;
//   try {
//     const user = await User.findOne({ where: { id: req.params.idUser } });
//     user.score = scoreUser;
//     await user.save();
//     res.json(user);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

module.exports = router;
