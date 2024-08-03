import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.model";

/**
 * Create a new
 */
export function createToken(email) {
    return new Promise((resolve, reject) => {
        const payload = {
            email
        }
        const options = {
            expiresIn: 60 // 60 seconds
        }
        const tokenSecret = process.env.TOKEN_SECRET;
        jwt.sign(payload, tokenSecret, options, (err, token) => {
            if(err) reject(err)
            resolve(token)
        })
    })
}

/**
 *  Checks if the user is exists
 */
export const isUserExists = async (email) => {
    const user = await UserModel.find({ email }).lean();
    if(!user) return false;
    return user;
}

/**
 * Check password of account
 */
export const isCorrectPassword = async ({email, password}) => {
    const user = await UserModel.findOne({ email, password }).lean();
    if(!user) return false;
    return user;
}