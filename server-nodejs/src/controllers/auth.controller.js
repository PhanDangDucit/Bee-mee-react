import { AuthService } from "../services/auth.service";
import { formartIdResponseDataMongoDb } from "../utils";

const authService = new AuthService();

export class AuthController {
    login = async(req, res, next) => {
        try{
            const {user, token} = await authService.login(req.body);
            res.setHeader("authorization", "Bearer" + " " + token);
            return res.json({
                status: 200,
                message: "login successful",
                metadata: {
                    user: formartIdResponseDataMongoDb(user),
                    token
                }
            });
        } catch (error) {
            next(error);
        }
    }

    signup = async(req, res, next) => {
        try{
            await authService.signup(req.body);
            return res.json({
                status: 200,
                message: "signup successful"
            });
        } catch (error) {
            next(error);
        }
    }

    delete = async(req, res, next) => {

    }

    getUser = async(req, res, next) => {

    }

}