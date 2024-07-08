
import mongoose from "mongoose";

const { schema, model } = mongoose;

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'User';

const UserSchema = new schema({
    _id: false,
    id: {typr: Number, required: true},
    fullname: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    // providerAuth: {type: [String], required: true},
    address: [{ type: Number, ref: 'address' }]
}, {
    collection: COLLECTION_NAME,
});

export const ProductModel = new model(DOCUMENT_NAME, UserSchema);
