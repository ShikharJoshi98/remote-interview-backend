const express = require('express');
const { interviewController } = require('../../controllers');
const { validateMiddleware } = require('../../middlewares');
const interviewSchema = require('../../utils/validations/validateInterview');

const router = express.Router();

router.post('/create',
    validateMiddleware.validate(interviewSchema),
    interviewController.createInterview);

module.exports = router