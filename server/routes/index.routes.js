const express = require('express');
const usersApiRouter = require('./api/user.routes');
const topicsApiRouter = require('./api/topic.routes');

const router = express.Router();

router.use('/api/users', usersApiRouter);
router.use('/api/topics', topicsApiRouter);

module.exports = router;
