import { UserService } from "../services/users.service";
import { formartIdResponseDataMongoDb } from "../utils";

const userService = new UserService();

export class UserController {
    /**
     * Add image
     */
    async getAllUsers(req, res, next) {
        try{
            const users = await userService.getAllUsers();
            return res.json(formartIdResponseDataMongoDb(users));
        } catch (error) {
            next(error);
        }
    }
}