const userRouter = require('express').Router();
const UserController = require('./user.controller');
const checkAuth = require('../../../helpers/authenticate');

userRouter.get('/', checkAuth, UserController.findAll);
userRouter.post('/', checkAuth, UserController.create);
userRouter.patch('/:id', checkAuth, UserController.update);
userRouter.delete('/:id', checkAuth, UserController.delete);

module.exports = userRouter;
