
import mongoose from "mongoose";

const schema = mongoose.schema;

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
    timestamps: true
});

export const ProductModel = new mongoose.model("products", UserSchema);
