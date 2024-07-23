const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController');
const { registerValidation, loginValidation } = require('../validations/userValidations');

router.post('/signup', registerValidation, signupController.signup);
router.post('/login', loginValidation, loginController.login);

module.exports = router;
