const userRouter = require('express').Router();
const UserController = require('./user.controller');

userRouter.get('/', UserController.findAll);
userRouter.post('/', UserController.create);
userRouter.patch('/:id', UserController.update);
userRouter.delete('/:id', UserController.delete);

module.exports = userRouter;
