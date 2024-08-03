
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';

const UserSchema = new Schema({
    username: {type: String, default: ""},
    phone: {type: String, default:""},
    email: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['admin', 'user']},
    // providerAuth: {type: [String], required: true},
    address: [
        {
            id: { type: Schema.Types.ObjectId, ref: 'address' }
        }
    ]
}, {
    collection: COLLECTION_NAME,
    timestamp: true
});

export const UserModel = new model(DOCUMENT_NAME, UserSchema);
