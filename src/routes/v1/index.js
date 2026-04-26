const express = require('express');

const authRouter = require('./auth.route');
const interviewRouter = require('./interview.route');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/interview', interviewRouter);

module.exports = router;