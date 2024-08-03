import express from 'express';
import { UserController } from '../controllers/users.controller';
const userRouter = express.Router()

const userController = new UserController();

userRouter.get('/', userController.getAllUsers);

export {
    userRouter
}