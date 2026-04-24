const express = require('express');
const { authController } = require('../../controllers');
const { authMiddleware, validateMiddleware } = require('../../middlewares');
const registerSchema = require('../../utils/validations/validateRegister');
const loginSchema = require('../../utils/validations/validateLogin');

const router = express.Router();

router.post('/register',
    validateMiddleware.validate(registerSchema),
    authController.register);
    
router.post('/login',
    validateMiddleware.validate(loginSchema),
    authController.login);

router.get('/authenticate',
    authMiddleware.protect,
    authController.getCurrentUser
);

router.post('/logout',
    authController.logout
);

module.exports = router;