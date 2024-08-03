"use strict";

import { createToken, isCorrectPassword, isUserExists } from "../helpers/authToken.helper";
import { UserModel } from "../models/User.model";

export class AuthService {
    
    login = async ({email, password}) => {
        const user = await isCorrectPassword({email, password});
        if(!user) throw new Error("Email or password is incorrect!");
        const token = await createToken(email);
        return {
            user,
            token
        };
    }

    signup = async (data) => {
        console.log(data);
        const isExists = await isUserExists(data.email);
        console.log("12421:", isExists);
        if(isExists) throw new Error(`This account is already exists!`);
        await UserModel.create(data);
    }
}