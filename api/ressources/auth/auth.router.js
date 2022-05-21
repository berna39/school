const authRouter = require('express').Router();
const authController = require('./auth.controller');

authRouter.post('/signin', authController.login);

module.exports = authRouter;
