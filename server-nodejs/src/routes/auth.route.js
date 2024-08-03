
import express from 'express';
import { AuthController } from '../controllers/auth.controller';

const authRouter = express.Router();

const authController = new AuthController();

// authRouter.get('/:email', authController.getUser);
// authRouter.delete('/:userId', authController.delete);
authRouter.post('/login', authController.login);
authRouter.post('/signup', authController.signup);

export {
    authRouter
}