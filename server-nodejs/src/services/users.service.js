import { UserModel } from "../models/User.model";

export class UserService {
    /**
     * Get all categories
     */
    async getAllUsers() {
        const users = await UserModel.find({}, {"__v": 0}).lean();
        if(!users) throw createError.Conflict("Get All User error!");
        return users;
    }
}