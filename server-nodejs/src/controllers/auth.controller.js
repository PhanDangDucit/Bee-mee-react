import { AuthService } from "../services/auth.service";
import { formartIdResponseDataMongoDb } from "../utils";
// import cookiesSession from "cookie-session";

const authService = new AuthService();

export class AuthController {
    login = async(req, res, next) => {
        try{
            const { user, token } = await authService.login(req.body);
            res.setHeader("authorization", "Bearer" + " " + token);
            res.cookie('authToken', token, {
                httpOnly: true,
                // path: '/',
                sameSite: false,
                secure: true
                // domain: 'http://localhost:3003', // If needed
            });
            // res.send()
            res.setHeader("Set-Cookie", [`authToken=${token}; Max-Age=${5000}; same-size=false`]);
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
            console.log(req.body);
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