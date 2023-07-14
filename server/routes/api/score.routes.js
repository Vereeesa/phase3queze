// const express = require("express");
// const router = express.Router();

// const { User } = require('../../db/models');

// router.put('/game', async (req, res) => {
//   if (req.session.user) {
//     const { userScore } = req.body;
//     const user = await User.findOne(
//       { where: { id: req.session.user } },
//       { logging: false }
//     );
//     user.score += userScore;
//     user.save();
//     res.json(user);
//   }
// });
// module.exports = router;