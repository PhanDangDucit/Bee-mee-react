

import mongoose from "mongoose";

const schema = mongoose.schema;

const OrderSchema = new schema({
    _id: false,
    id: {type: Number, required: true},
    userId: { type: Number, ref: 'users' },
    
    // userId: { type: Schema.Types.ObjectId, ref: 'users' },
    paymentMethod: {type: String, required: true},
    orderDate: {type: Date, default: Date.now()},
    orderStatus: String
});

export const ProductModel = new mongoose.model("orders", OrderSchema);