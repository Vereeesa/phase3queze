const express = require('express');
const studentsApiRouter = require('./api/student.routes');

const router = express.Router();

router.use('/api/students', studentsApiRouter);

module.exports = router;
